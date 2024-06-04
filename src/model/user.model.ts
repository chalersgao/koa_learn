const { DataTypes } = require("sequelize")
const  { toDefaultValue } = require("sequelize/lib/utils")
const seq1 = require("../db/seq")
//创建模型()
const User = seq1.define('zd_User',{
    //id 会被自动创建
    user_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        comment:'用户名，唯一'
    },
    password:{
        type:DataTypes.CHAR(64),
        allowNull:false,
        comment:'密码'
    },
    is_admin:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        toDefaultValue: 0,
        comment:"是否为管理员,0不是,1是"
    }
},
{
    timestamps: false,
})
//强制同步数据库（创建表）
// User.sync({ force: true })
module.exports = User