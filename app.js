const express = require('express')
const app = express()
const path = require('path')

const formRouter = require('./router/formRouting');
const homeRouter = require('./router/homeRouting');
const searchRouter = require('./router/searchRouting');

const PORT = process.env.PORT || 8080
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`listening on port: ${PORT}`)

})

const viewPath = path.join(__dirname,'views')
app.set('views',viewPath)
app.set('view engine','ejs')


app.use('/newMessage',formRouter);
app.use('/search',searchRouter);
app.use('/',homeRouter);

app.use((req,res)=>{
    res.status(404).send("<h1>Page not found!</h1>")
})

