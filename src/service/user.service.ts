import { where } from "sequelize";
const User1 = require("../model/user.model")
class UserService {
  async createUser(user_name:any,   password:any) {
    //插入数据
    //await表达式:promise对象的值
    const res = await User1.create({ user_name, password });
    // console.log(res);
    return res.dataValues
  }
   async getUserInfo({id ,user_name,password,is_admin}:{id:string,user_name:string,password:string,is_admin:boolean}){
    const whereOpt = {}
    id && Object.assign(whereOpt,{id})
    user_name && Object.assign(whereOpt,{user_name})
    password && Object.assign(whereOpt,{password})
    is_admin && Object.assign(whereOpt,{is_admin})

    const res = await User1.findOne({
      attributes:['id','user_name','password','is_admin'],
      where:whereOpt
    })
    return res ? res.dataValues : null
  }
}
module.exports = UserService;
