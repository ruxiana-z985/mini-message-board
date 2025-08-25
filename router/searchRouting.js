const {Router,static} = require('express')
const searchRouter = Router()
const {getMessageByuser} = require('../controllers/controller');
const path = require('path')
const assetPath = path.join(__dirname,'../public');

searchRouter.use(static(assetPath))

searchRouter.get('/',getMessageByuser);

searchRouter.use((req,res)=>{
    res.status(404).send("<h1>Page not found!</h1>")
})
module.exports = searchRouter