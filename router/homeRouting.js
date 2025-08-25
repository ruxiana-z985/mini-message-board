const {Router} = require('express');
const {getMessages} = require('../controllers/controller.js')
const homeRouter = Router()
const assetPath = path.join(__dirname,'../public');
homeRouter.use(static(assetPath))
homeRouter.get('/',getMessages);