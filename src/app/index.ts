import koaBody from "koa-body"

const Koa = require ('Koa')
const {KoaBody} = require('koa-body')
const useRouter = require('../router/user.route')
const app1 = new Koa()
app1.use( koaBody() ) 
app1.use(useRouter.routes())

module.exports = app1