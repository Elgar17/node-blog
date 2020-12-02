## 开发阶段



### 初始化

安装的插件

```bash
# 数据库
npm i mysql -D 

# 安全xss 
npm i xss -D
```



### 登录

登录需要用到以下两个中间件：

- express-session
- connect-redis

req.session 保存登录信息，**登录校验做成中间件**。

#### 1. express-session

安装 ：

```bash
npm i express-session -D
```

在  `app.js` 文件中添加配置：

```js
const session = require('express-session')

app.use(session({
    // 该参数随便设置就可以
    secret: "&HJd12jH_h&",
    // 配置 cookie
    cookie:{
        // 有效路径
        path: '/',
        // 禁止前端操作cookie
        httpOnly: true,
        // cookie 有效时间
        maxAge: 24 * 60 * 60 * 1000 
    }
}))
```

如何判断用户是否一经登录呢？

在用户发来登录请求后，用用户名和密码查询数据库，如果存在，我们在 session 中设置一个 name 属性。

当用户访问其他页面（或接口）时，我们只要查询 session 中有没有存在 name 属性来判断用户的登录状态，如过存在说明用户已经登录。



#### 2. redis connect-redis

安装：

```bash
npm i redis  connect-redis -D
```

