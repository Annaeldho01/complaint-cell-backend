const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {complaintmodel}=require("./models/complaint")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://anna:anna@cluster0.ld2gi.mongodb.net/complaintDB?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>{
    let input=req.body
    let complaint=new complaintmodel(input)
    complaint.save()
    res.json({"status":"success"})
})



app.listen(8080,()=>{
    console.log("server started")
})