import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req,res) =>{
   try {
     const {message} = req.body;

     const {id:recivedID} = req.params;
     

     
     const senderID = req.user._id;


     console.log(req.user)



   //   console.log("bdfhvhjfgf "+senderID)
   //   console.log(senderID)
   //   console.log("\n\n\n")


     let conversation = await Conversation.findOne({
        participants:{$all:[senderID,recivedID]},
     })


     

     if(!conversation){
      console.log("CREATING THE CONVO")
        conversation = await Conversation.create({
            participants:[senderID,recivedID]
         })
      }
      
      const newMessage = new Message({
         senderID:senderID,
         recivedID:recivedID,
         message
      })
      
      await newMessage.save();
      
      if(newMessage){
         conversation.messages.push(newMessage._id)
      }
      
      await conversation.save();


     res.status(201).json(newMessage);

     
   } catch (error) {
    console.log("internal d error:",error.message);
    res.send("internal d error").status(500);
   }
}

export const getMessage = async (req,res) => {
    try {
      
   const {id:userToChat} = req.params;
   const senderID = req.user._id;

   const conversation = await Conversation.findOne({
      participants:{$all:[senderID,userToChat]}
   }).populate("messages");

    if(!conversation) res.status(200).json([]);

    const messages = conversation.messages
   
   res.status(200).json(messages)
   

    } catch (error) {  
      console.log("internal d error:",error.message);
      res.send("internal d error").status(500);
    }
}
