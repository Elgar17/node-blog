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

// 统一登录验证
const loginCheck = (req) => {
    if (!req.session.username) {
        return Promise.resolve(new ErrorModel('尚未登录'))
    }

}

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id

    // 博客列表
    if (method == "GET" && req.path == "/api/blog/list") {
        let author = req.query.author
        const keyword = req.query.keyword

        if (req.query.isadmin) {
            // 管理员界面
            // 登录验证
            let loginCheckResult = loginCheck(req);
            if (loginCheckResult) {
                return loginCheckResult
            }
            // 强制查询自己的博客
            author = req.session.username
        }

        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 博客详情
    if (method == "GET" && req.path == "/api/blog/detial") {

        const result = getDetial(id)
        return result.then(detailDate => {
            return new SuccessModel(detailDate)
        })
    }

    // 新建博客
    if (method == "POST" && req.path == "/api/blog/new") {
        // 登录验证
        var loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheckResult
        }

        req.body.author = req.session.username
        const rusult = newBlog(req.body)
        return rusult.then(data => {
            return new SuccessModel(data)
        })

    }

    // 更新
    if (method == "POST" && req.path == "/api/blog/update") {

        // 登录验证
        var loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheckResult
        }

        let result = updateBlog(id, req.body)
        return result.then(updateData => {
            if (updateData) {
                return new SuccessModel(updateData)
            } else {
                return new ErrorModel("数据更新失败")
            }
        })

    }

    // 删除博客
    if (method == "POST" && req.path == "/api/blog/del") {
        var loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheckResult
        }

        let author = req.session.username
        let result = delBlog(id, author)
        return result.then(val => {
            if (val) {
                return new SuccessModel(val)
            } else {
                return new ErrorModel("删除博客失败")
            }
        })
    }
}

module.exports = handleBlogRouter