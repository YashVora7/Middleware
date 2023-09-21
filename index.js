const express = require("express")
const check = require("./check")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html")
})
app.post("/post",check,(req,res)=>{
    let data = {name: req.body.name, grid: req.body.grid, course: req.body.course}
    res.status(200).send(data)
})

app.listen(8090,()=>{
   console.log("Server Started 8090");
})