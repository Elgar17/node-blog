const {
    ErrorModel
} = require('../model/resModel')

async function loginCheck(ctx, next) {
    if (ctx.session.username) {
        await next()
        return
    }
    ctx.body = new ErrorModel('未登录')
    
}

module.exports = loginCheck