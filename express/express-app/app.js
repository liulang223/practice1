var createError = require('http-errors');
var express = require('express');
var path = require('path');//解析路径
var cookieParser = require('cookie-parser');//获取cookie
var logger = require('morgan');//解析日志

var cookieSession = require('cookie-session');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('trust proxy', 1) // trust first proxy
var sess = {
  secret: '123',
  cookie: {}
}
 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
 

app.use(cookieSession({
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  secret: 'aF,.j)wBhq+E9n#aHHZ91Ba!VaoMfC', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));//声明全局变量 set方法
app.set('view engine', 'ejs');

app.use(logger('dev')); //  声明全局函数方法 use方法
app.use(express.json());//php下的传输都是数组传输 //json的坑 外双引内单引才有效
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//static 解析静态资源

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
