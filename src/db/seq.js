 //import { Sequelize } from "sequelize"  
 const {Sequelize} = require('sequelize')
// import env from '../config/config.default'
const {env} = require('../config/config.default')
const {
    MYSQL_HOST = env.MYSQL_HOST,
    MYSQL_PORT = env.MYSQL_PORT,
    MYSQL_USER = env.MYSQL_USER,
    MYSQL_PWD = env.MYSQL_PWD,
    MYSQL_DB = env.MYSQL_DB
} = process.env

const seq = new Sequelize( MYSQL_DB  ,MYSQL_USER , MYSQL_PWD ,{
    host: MYSQL_HOST,
    dialect:'mysql',
})
// const seq = new Sequelize("123","root","1234",{
//     host: "localhost",
//     dialect:'mysql',
// })
/* seq
.authenticate()
.then(()=>{
   console.log('连接成功')
}).catch(err => {
    console.log('数据库连接失败',err)
}) */
 module.exports = seq
