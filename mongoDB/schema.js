const mongoose=require("mongoose");
const schema=mongoose.Schema;

const usersdata=new schema({
    Messages:[{name:String,image:String,msj:String}],
    DBonlineUsers:[{name:String,image:String,id:String,online:Boolean}]
})

module.exports=mongoose.model("UsersData",usersdata);