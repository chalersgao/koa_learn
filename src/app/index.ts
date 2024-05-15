const Koa = require ('Koa')
const useRouter = require('../router/user.route')
const app1 = new Koa()
app1.use(useRouter.routes())

module.exports = app1