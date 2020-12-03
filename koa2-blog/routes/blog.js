const router = require('koa-router')()
const {
    getList,
    getDetial,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
router.prefix('/api/blog')

const loginCheck = require('../middleware/loginCheck')
const { context } = require('../app')

// 列表
router.get('/list', async function (ctx, next) {
    let author = ctx.author || ''
    let keyword = ctx.query.keyword || ''
    if (ctx.query.isadmin) {
        if (ctx.session.username == null) {
            ctx.body = new ErrorModel('未登录')
            return
        }
        author = ctx.session.username
    }
    console.log(author,keyword)
    var data = await getList(author, keyword)
    ctx.body = new SuccessModel(data)

})

// 详情
router.get('/detail', async function (ctx, next) {
    console.log(ctx.query.id)
    var id = ctx.query.id
    let deta = await getDetial(id)
    ctx.body = new SuccessModel(deta)
})

// 新建博客
router.post('/new', loginCheck, async function (ctx, next) {
    let body = ctx.request.body
    body.author = ctx.session.username;
    let data = await newBlog(body)
    ctx.body = new SuccessModel(data)
})

// 更新博客
router.post('/update', loginCheck, function (ctx, next) {
    let data = updateBlog(ctx.request.body.id, ctx.request.body)
    if (data) {
        ctx.body = new SuccessModel('更新成功')
    } else {
        ctx.body = new ErrorModel('更新失败')
    }


})

// 删除博客
router.post('/del', loginCheck, async function (ctx, next) {
    let id = ctx.request.body.id
    let aothor = ctx.session.username
    let data = await delBlog(id, aothor)
    if (data) {
        ctx.body = new SuccessModel("删除成功")
    } else {
        ctx.body = new ErrorModel("删除失败")
    }
})

module.exports = router