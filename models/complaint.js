const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "mobile":String,
        "address":String,
        "pincode":String,
        "date":String,
        "place":String,
        "district":String,
        "email":String,
        "type":String,
        "username":String,
        "password":String
    }
)
let complaintmodel=mongoose.model("complaints",schema)
module.exports={complaintmodel}