const Router = require('koa-router')
// import Router from 'koa-router' 这样写报错
import UserService from "../controller/user.controller"
const userservice = new UserService()
const router = new Router({prefix:'/users'}) //{prefix:'/users'}为统一前缀
//注册接口
router.post('/register', userservice.register)
//登录接口
router.post('/login',userservice.login)
export default router