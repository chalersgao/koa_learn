const { createUser} = require('../service/user.service')
class UserControler {
    async register(ctx:any,next:any){
        //获取数据
        //console.log(ctx.request.body)
        const {user_name, password} = ctx.request.body
        //操作数据库
        const res = await createUser(user_name,password)
        console.log(res)
        //返回结果
        ctx.body = ctx.request.body
    }
    async login(ctx:any,next:any){
        ctx.body='登陆成功'
    }
}

module.exports = new UserControler()