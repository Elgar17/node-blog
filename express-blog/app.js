var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog')
var userRouter = require('./routes/user')

var app = express();

// view engine setup 跟前端页面有关
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));                             // 日志
app.use(express.json());                            // 处理 post 请求中的 json 格式的数据
app.use(express.urlencoded({ extended: false }));   // 处理 post 请求中的表单请求格式的数据
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); // 静态文件的路径处理

// 路由注册
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/blog',blogRouter)
app.use('/api/user/',userRouter)

// catch 404 and forward to error handler /api/user/
app.use(function(req, res, next) {
  next(createError(404));
});

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
