 //import { Sequelize } from "sequelize"
const {Sequelize} = require('sequelize')
const seq = new Sequelize('123','root','1234',{
    host:'localhost',
    dialect:'mysql',
})
seq.authenticate().then(()=>{
   console.log('连接成功')
}).catch(err => {
    console.log('数据库连接失败',err)
})