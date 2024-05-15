
const { APP_PORT } = require('./config/config.default')
const app = require('./app')

app.use((ctx:any,next:any) =>{
    ctx.body = 'hello api'
}
)
app.listen(APP_PORT, () => {
   console.log (`sever is running on http://locaLhost:${APP_PORT}`) 
})