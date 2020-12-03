const router = require('koa-router')()
const {
  login
} = require('../controller/user')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')
router.prefix('/api/user/')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/login',async function (ctx, next) {
  let {
    username,
    password
  } = ctx.request.body
  let data = await login(username,password)
  if(data.username){
    ctx.session.username = data.username
    ctx.session.realname = data.realname
    ctx.body = new SuccessModel()
  }else{
    ctx.body = new ErrorModel('登录失败')
  }
})

module.exports = router
