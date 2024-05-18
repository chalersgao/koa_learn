import UserService from "../service/user.service"
const userervice = new UserService( )
class UserControler{
    async register(ctx:any,next:any){
        //获取数据
        //  console.log(ctx.request.body)
        const {user_name,password} =ctx.request.body
         //处理数据
         const res = await userervice.createUser(user_name,password)
        //  console.log(res)
         //返回数据
         ctx.body = ctx.request.body
    }
    async login(ctx:any,next:any){
        ctx.body = '登录成功'
    }
}
export default  UserControler