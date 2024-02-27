const mongoose = require('mongoose')

const order = new mongoose.Schema({
    desc:String,
    url:String,
    email:String,
    size:String,
    address:String,
    phone:String,
    price:String,
    date:String,
})

const OrderModel = mongoose.model('order_Detail',order)

module.exports = OrderModel