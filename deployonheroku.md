1.step
create build version of react app

2.step
add this script in server.js/app.js 
 if(process.env.NODE_ENV==='production'){
    app.use(express.static("client/build"))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,"client","build","index.html"))
    })
}
3.step
add this script in server---- packagejson
 "heroku-postbuild":"cd client && npm install && npm run build"

 4.step
 connect to heroku... 
 heoku login
 git add .
 git commit -m ""
 git push heroku master
 heroku open