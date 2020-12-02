const {
    ErrorModel
} = require('../model/resModel')

async function loginCheck(ctx, next) {
    if (req.session.username) {
        await next()
        return
    }
    ctx.body = new ErrorModel('未登录')
    
}

module.exports = loginCheck