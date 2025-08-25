const {getAllMessages,getMessageByUsername,addMessage} = require('../model/mock_db');

async function getMessages(req,res){
    const allMessages = await getAllMessages();
    if(!allMessages.isSucess){
        res.render('index',{error:allMessages.error,messageTexts:allMessages.messages})
    }
    res.render('index',{error:null,messageTexts:allMessages.messages});
}

async function getMessageByuser(req,res){
    const username = req.query.username;
    if(username){
        const user = await getMessageByUsername(username);
        if(!user.isSucess){
            res.render('search',{error:user.error})
        }
        res.render('search',{error:null,user:user})
    }
    res.render('search',{error:null})

    res.ren

    
    
}

async function AddMessage(req,res){
    const messageContent = req.body.messageContent;
    const username = req.body.username;
    const saved = await addMessage(messageContent,username);
    
    if(!saved.isSucess){

        res.status(501).render('form',{error:saved.error})
    }
    res.render('index',{error:null,messageTexts:saved.messages})

}

function getForm(req,res){
    try{
        res.render('form',{error:null})
    }catch(error){
        res.status(404).send("<h1>File not found</h1>")
    }
}



module.exports = {getMessages,getMessageByuser,AddMessage,getForm}