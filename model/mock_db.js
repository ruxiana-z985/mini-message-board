const messages = [
  {
    "text": "Kaladin, do you have a bag I can borrow?",
    "user": "Adolin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "The only bags I have are the ones under my eyes, and they’re specifically designed to carry the burden of my existence.",
    "user": "Kaladin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Literally all you had to say was no.",
    "user": "Adolin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Okay Shallan, give me your hairdryer",
    "user": "Kaladin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "My what?",
    "user": "Shallan",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Don’t you carry a hairdryer in your safe pouch?",
    "user": "Kaladin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Have you ever met a human woman before?",
    "user": "Shallan",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Hey guys what's up?",
    "user": "Adolin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Do you have a hairdryer?",
    "user": "Kaladin",
    "dateAdded": "2025-08-25"
  },
  {
    "text": "Of course I do, I'm not an animal",
    "user": "Adolin",
    "dateAdded": "2025-08-25"
  }
]

async function getAllMessages(){
    return messages;
}

async function getMessageByUsername(username){
  const user = messages.filter(function(element){
     return element.user == this.username;
  },username)
  if(!user){
    return {error:"user not in database"}
  }
  return user
}

async function addMessage(text,user){
    
    try{
        let dateAdded = new Date();
        messages.push({text,user,dateAdded})
        return {isSaved:true,messages:messages,message:"successfully saved"}
    }catch(error){
        console.log("error in database",error)
        return {message:"datbase error",isSaved:false,messages:messages}
    }
   
}

module.exports = {getAllMessages,getMessageByUsername,addMessage}