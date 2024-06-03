const Router = require('koa-router')
// import Router from 'koa-router' 这样写报错
import UserControler from"../controller/user.controller"
const usercontroler = new UserControler()
const router = new Router({prefix:'/users'}) //{prefix:'/users'}为统一前缀
//注册接口
router.post('/register', usercontroler.register)
//登录接口
router.post('/login',usercontroler.login)
export default router