const {AddMessage,getForm} = require('../controllers/controller')
const {Router,urlencoded,static} = require('express');
const path = require('path')
const formRouter = Router();


const assetPath = path.join(__dirname,'../public');
formRouter.use(static(assetPath))
formRouter.use(urlencoded({extended:true}))
formRouter.get('/',getForm);
formRouter.post('/',AddMessage);

formRouter.use((req,res)=>{
    res.status(404).send("<h1>Page not found!</h1>")
})

module.exports = formRouter;