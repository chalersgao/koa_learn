import koaBody from "koa-body"
import Koa from 'koa'
import useRouter from '../router/user.route'
// const useRouter = require('../router/user.route')这里为啥又不行了
const app = new Koa()
app.use( koaBody() ) 
app.use(useRouter.routes())
export default app