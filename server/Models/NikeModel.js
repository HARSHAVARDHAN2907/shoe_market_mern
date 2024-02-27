const mongoose = require("mongoose");

const nikeSchema = new mongoose.Schema({
  desc: String,
  shoes: Object,
});

const NikeModel = mongoose.model("nike_stock", nikeSchema,"nike_stock");

module.exports = NikeModel;
