class UserControler {
    async register(ctx:any,next:any){
        ctx.body = '用户注册成功'
    }
    async login(ctx:any,next:any){
        ctx.body='登陆成功'
    }
}

module.exports = new UserControler()