const mongoose = require('mongoose')

const demoModel = new mongoose.Schema({
    url:String,
    desc:String,
    images:Object,
});

const DemoModel = mongoose.model('demo_details',demoModel)
module.exports = DemoModel;