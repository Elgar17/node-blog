const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const fs = require('fs')
const path = require('path')
const morgan = require('koa-morgan')

const index = require('./routes/index')
const users = require('./routes/users')
const blog = require('./routes/blog')
const {REDIS_CONF} = require('./conf/db')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 日志
const ENV = process.env.NODE_ENV
if(ENV == "dev"){
  // 测试环境
  app.use(morgan('dev'));                             
}else{
  // 线上环境
  let logFileName = path.join(__dirname,'logs/acsess.log')
  let writeStream = fs.createWriteStream(logFileName,{
    flags: 'a'
  })
  app.use(morgan('combined',{
    stream: writeStream
  })); 
}

// session 配置
app.keys = ['#jkdsf98_n']
app.use(session({
  // 配置cookie
  cookie:{
    path: '/',
    httpOnly: true
  },
  // 配置redis
  store:redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
