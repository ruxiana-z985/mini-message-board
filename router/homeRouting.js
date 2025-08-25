const {Router,static} = require('express');
const {getMessages} = require('../controllers/controller.js')
const path = require('path')
const homeRouter = Router()
const assetPath = path.join(__dirname,'../public');
homeRouter.use(static(assetPath))
homeRouter.get('/',getMessages);

module.exports = homeRouter