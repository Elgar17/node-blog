const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const {
    login
} = require('../controller/user')




const handleUserRouter = (req, res) => {
    const method = req.method

    // 登录
    if (method == "POST" && req.path == "/api/user/login") {
        let {
            username,
            password
        } = req.body
        // let {
        //     username,
        //     password
        // } = req.query
        // console.log(req.body)
        let result = login(username, password)
        return result.then(data => {
            if (data.username) {
                // 设置 session
                req.session.username = data.username
                req.session.realname = data.realname
                // console.log(req.session)
                return new SuccessModel()
            } else {
                return new ErrorModel('登陆失败')
            }
        })
    }



    // 测试
    // if (method == "GET" && req.path == "/api/user/login-test") {
    //     if (req.session.username) {
    //         return Promise.resolve(new SuccessModel())
    //     }
    //     return Promise.resolve(new ErrorModel('尚未登录'))
    // }
}

module.exports = handleUserRouter