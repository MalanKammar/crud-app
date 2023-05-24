const express =require('express')
const path=require('path')
const connectDb=require('./db/connect')

require('dotenv').config()
const port=process.env.PORT

const app =express()

//bodyparser middleware
app.use(express.urlencoded({extended:true}))  //incoming data
app.use(express.json()) //outgoing response

//static directory
app.use(express.static('./view'))

//indexx rooute
app.use(`/`,require('./route/userRoute'))

// //default route
// app.all('*',(req,res)=>{
//     res.status(404).sendFile(path.resolve(__dirname,'./view/404.html'))
// })
// server port 
app.listen(port,()=>{
    connectDb()
    console.log(`server started @ http://localhost:${port}`)
})