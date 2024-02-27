const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const usermodel = mongoose.model("user_details",userSchema)
module.exports = usermodel