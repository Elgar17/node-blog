const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/login', function (ctx, next) {
  ctx.body = 'this is login api '
})

module.exports = router
