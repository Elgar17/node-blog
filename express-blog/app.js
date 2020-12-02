const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs')
const cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisSttore = require('connect-redis')(session)



// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog')
var userRouter = require('./routes/user')

var app = express();

// view engine setup 跟前端页面有关
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(express.static(path.join(__dirname, 'public'))); // 静态文件的路径处理
// 日志
const ENV = process.env.NODE_ENV
if(ENV == "dev"){
  // 测试环境
  app.use(logger('dev'));                             
}else{
  // 线上环境
  let logFileName = path.join(__dirname,'logs/acsess.log')
  let writeStream = fs.createWriteStream(logFileName,{
    flags: 'a'
  })
  app.use(logger('combined',{
    stream: writeStream
  })); 
}



app.use(express.json());                            // 处理 post 请求中的 json 格式的数据
app.use(express.urlencoded({ extended: false }));   // 处理 post 请求中的表单请求格式的数据
app.use(cookieParser());

const redisClient = require('./db/redis')
const sessionStore = new RedisSttore({
  client: redisClient
})
// session 中间
app.use(session({
  // 该参数随便设置就可以
  secret: "&HJd12jH_h&",
  resave: false,
  saveUninitialized: true,
  // 配置 cookie
  cookie:{
      // 有效路径
      // path: '/',
      // // 禁止前端操作cookie
      // httpOnly: true,
      // cookie 有效时间
      // maxAge:  60000 
  },
  store: sessionStore
}))

// 路由注册
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/blog',blogRouter)
app.use('/api/user/',userRouter)

// catch 404 and forward to error handler /api/user/
app.use(function(req, res, next) {
  next(createError(404));
});

// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};   // 需要改成 dev

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
