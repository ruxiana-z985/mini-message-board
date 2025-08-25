const {Router} = require('express')
const searchRouter = Router()
const {getMessageByuser} = require('../controllers/controller');
const assetPath = path.join(__dirname,'../public');
searchRouter.use(static(assetPath))
searchRouter.get('/',getMessageByuser);
