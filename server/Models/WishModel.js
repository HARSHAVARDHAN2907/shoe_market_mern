const mongoose = require('mongoose')

const wish = new mongoose.Schema({
    email:String,
    url: String,
    desc: String,
    discount: String,
    price: String,
})

const WishModel = mongoose.model("wishes",wish)

module.exports = WishModel