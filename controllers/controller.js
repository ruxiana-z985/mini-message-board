const {getAllMessages,getMessageByUsername,addMessage} = require('../model/mock_db');

async function getMessages(req,res){
    const allMessages = await getAllMessages();
    res.render('index',allMessages);
}

async function getMessageByuser(req,res){
    const username = req.query.username;
    let user = null;
    if(username){
        user = await getMessageByUsername(username);
        if ("error" in user){
            user = null
        }
    }

    res.render('search',user)
    
    
}

async function AddMessage(req,res){
    const messageContent = req.body.messageContent;
    const username = req.body.username;
    const saved = await addMessage(messageContent,username);
    
    if(!saved.isSaved){

        res.status(500).render('form',saved.message)
    }
    res.render('index',saved.messages)

}

function getForm(){
    try{
        res.render('form')
    }catch(error){
        res.status(404).send("<h1>File not found</h1>")
    }
}



module.exports = {getMessages,getMessageByuser,AddMessage,getForm}