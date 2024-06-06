import app from './app'
const env = require('./config/config.default')
const APP_PORT:any  = env.APP_PORT
app.listen(APP_PORT,()=>{
  console.log (`sever is running on http://locaLhost:${APP_PORT}`)
})

