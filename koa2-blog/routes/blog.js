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


// 列表
router.get('/list', async function (ctx, next) {
    let author = ctx.author || ''
    let keyword =ctx.keyword || ''
    if (ctx.query.isadmin) {
        if (ctx.session.username == null) {
            ctx.body = new ErrorModel('未登录')
            return
        }
        author = ctx.session.username
    }
    var data = await getList(author,keyword)
    ctx.body = new SuccessModel(data)
    
})

// 详情
router.get('/detail',async function (ctx, next) {
    var id = ctx.query.id
    let detail = await getDetial(id)
    ctx.body = new SuccessModel(detail)
})

// 新建博客
router.post('/new',async function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

// 更新博客
router.post('/update', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

// 删除博客
router.post('/del', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router