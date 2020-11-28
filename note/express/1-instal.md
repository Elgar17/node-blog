## 介绍

### 1. 安装脚手架

使用脚手架 express-generator，类似于vue cli，帮我们生成项目骨架。

```bash
// 安装脚手架(全局)
npm install express-generator -g

// 生成项目(在此目录下生成express-blog的项目)
express express-blog

// 进入项目目录 & 安装依赖 & 运行
cd express-blog
npm install
npm start
```

访问 3000 [端口](http://localhost:3000/)，看到以下字样说明安装成功。

	Express
	Welcome to Express

介绍一下脚手架生成的目录，有些目录可能用不到，可以删除，比如 views，public 因为这里存放页面有关的文件，我们这是前后端分离的项目，页面需要到单独写。



	bin		// http 服务
	public	// 静态资源
	routers	// 路由
	views	// 视图，前端页面
	app.js	

### 2. 安装开发依赖	

- nodemon：安装此插件后每次更改完代码后，不需要重启 
- cross-env：开发环境与生产环境的切换

```bash
npm i nodemon cross-env --save-dev 
```

安装完成后，在`package.json`文件中添加配置：

```json
"scripts": {
    "start": "node ./bin/www",
    "dev": "cross-env NODE_ENV=dev nodemon ./bin/www"
}
```

之后用以下命令启动项目。

```bash
npm run dev
```

### 3. app.js

这是项目的入口，介绍一些这里的插件的作用。

	createError：处理 404 页面
	express：框架
	cookieParser：解析cookie
	morgan：自动生成日志
	app：是请求的实例

cookie 从前端发来的时候是字符串，用 cookieParser 插件解析成对象，我们在处理了路由时，通过  `req.cookie` 来轻松获取对应的 cookie。

我们在 app.js 中 需要注释这三行代码，这是视图有关的设置，在前后端不分开的项目中用到，我们这是前后端分离项目。

```js
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
```

express 中 post 请求我们不需要自己去处理通过，框架帮我们处理好了。

```js
// 处理 post 请求中的 json 格式的数据
app.use(express.json());
// 处理 post 请求中的表单请求格式的数据
app.use(express.urlencoded({ extended: false }));
```

### 4. 路由与请求参数

#### 4.1 get请求

get请求的参数可以在 req.



#### 4.2 post请求

post 请求的数据我们在 req.body 中可以获取到，下面是完整的例子

```js
router.post('/', function (req, res, next) {
    var data = req.body
    res.json(data);
});
```

前端用 json 还是表单格式发都可以收到请求。

### 5. 中间件机制

介绍以下两点：

	- app.use
	- next

`app.use()` 里面可以写一个函数，也可以写请求，默认是 get。

如果use中只写参数，只要有请求都会有执行该函数，但是前提是，我们需要在函数内部执行 next 函数。

```js
app.use((req,res,next)=>{
    console..log('hi')
    next()
})
```