const User1 = require("../model/user.model")
class UserService {
  async createUser(user_name:any, password:any) {
    //插入数据
    //  User.createUser({
    //表的字段
    /*         user_name: user_name,
        password:password, */
    // })
    //await表达式:promise对象的值
    const res = await User1.create({ user_name, password });
    // console.log(res);
    return res.dataValues
  }
}
module.exports = UserService;
