const express=require("express");
const socket=require("socket.io");
const bodyParser=require("body-parser");
const app=express();
const mongoose=require("mongoose");
const DataBase=require("./mongoDB/schema.js")
require("dotenv").config();
const path=require("path")

//middle ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
const port=process.env.PORT || 4000;
const server=app.listen(port,()=>{
    console.log("server is running on :"+port)
})

//mongodb connection
let Mongo_URI=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0-gntox.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(Mongo_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

if(process.env.NODE_ENV==='production'){
    app.use(express.static("build"))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,"build","index.html"))
    })
}

 let users=[]; 
const io=socket(server);

app.get("/allmessages",(req,res)=>{
DataBase.findById({_id:"5d7d23ce60fc407143a7099d"}).then(db=>{
    res.send(db)
})
})




io.on("connection",(socket)=>{
   
   socket.on("connecteduser",(data)=>{
    let test=socket.id
    let newuser={...data,id:test,online:true};
            users.push(newuser) 
                        DataBase.findByIdAndUpdate({_id:"5d7d23ce60fc407143a7099d"},{$push:{DBonlineUsers:newuser}},(err,doc)=>{
                            if(err){
                                console.log(err)
                            }else{
                                console.log("saved")
                            }
                        })
                        
                        io.sockets.emit("usersOnline",users) 
                    })   

   socket.on("chat",(data)=>{
     
      
    DataBase.findByIdAndUpdate({_id:"5d7d23ce60fc407143a7099d"},{$push:{Messages:data}},(err,doc)=>{
        if(err){
            console.log(err)
        }else{
            console.log("saved")
        }
    })

    io.sockets.emit("chat",data)
        
 
   })
    socket.on("disconnected",(data=>{
        console.log(data)
    }))
    
})
