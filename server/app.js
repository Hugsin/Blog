const express = require('express')

const {
  PORT,
  MONGODBADRESS,
  HOST
} = require('./config.js')

var bodyParser = require('body-parser')
var session = require('express-session')
var cookieParser = require('cookie-parser')

const app = express()
const Route = require('./router/index.js')
var mongoose = require('mongoose')

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', HOST)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
// 设置静态资源路径
app.use(express.static('./static'))

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// 解析 application/json
app.use(bodyParser.json())

// 设置session和cookie
app.use(cookieParser())
app.use(session({
  secret: '12345',
  name: 'testapp',
  resave: false,
  saveUninitialized: true
}))

// 连接mongodb数据库
// mongoose.Promise = global.Promise; //不加这句会报错
mongoose.connect(MONGODBADRESS)
  .then(() => {
    console.log('Connected to blogDB Mongoose')
  })
  .catch(err => {
    console.error(`error:${err}`)
  })
// require('./models/idea.js')

// const idea = mongoose.model('ideas')

// 路由守卫
let routes = new Route({app})

routes.goHome()
routes.getImage()

app.listen(PORT, () => {
  console.log(`server on ${PORT}`)
})
