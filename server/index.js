const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const UserModel = require("./Models/User");
const NikeModel = require("./Models/NikeModel");
const DemoModel = require("./Models/DemoModel");
const OrderModel = require("./Models/OrderModel");
const WishModel = require("./Models/WishModel");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
mongoose.connect("mongodb://localhost:27017/MERN_PROJECT");
app.listen(3001, () => console.log("Server is running...."));

app.post("/register", async (req, res) => {
  try {
    const usercheck = await UserModel.findOne({ name: req.body.name });
    if (usercheck) {
      console.log("Username already exists");
      res.status(201).json({ message: "Username already exists" });
    } else {
      const emailcheck = await UserModel.findOne({ email: req.body.email });
      if (emailcheck) {
        res.status(201).json({ message: "Email already exists" });
      } else {
        const hashedPassword = await bcrypt.hashSync(
          req.body.pass,
          bcrypt.genSaltSync(10)
        );

        const newUser = await UserModel.create({
          name: req.body.name,
          email: req.body.email,
          pass: hashedPassword,
        });
        res.status(200).json({ message: "Registration successful" });
      }
    }
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const checkEmail = await UserModel.findOne({ email: req.body.email });
  if (checkEmail) {
    const getPass = await UserModel.findOne({ email: req.body.email });
    if (bcrypt.compareSync(req.body.pass, getPass["pass"])) {
      isLoggedIn = true;
      const token = jwt.sign({ email: getPass["email"] }, "jwt-secret-key", {
        expiresIn: "1h",
      });
      res.cookie("token", token);
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(201).json({ message: "Invalid Password" });
    }
  } else {
    res.status(201).json({ message: "Email does not exists" });
  }
});

app.get("/nikedata", async (req, res) => {
  const nikeData = await NikeModel.find({ cat: { $ne: "jordan" } });
  console.log(nikeData);
  if (nikeData) {
    res.status(200).json({ nikeData: nikeData });
  }
});
app.get("/jordandata", async (req, res) => {
  const nikeData = await NikeModel.find({ cat: "jordan" });
  console.log(nikeData);
  if (nikeData) {
    res.status(200).json({ nikeData: nikeData });
  }
});

app.post("/demo", async (req, res) => {
  const demodata = await NikeModel.find({ "shoes.url": req.body.url });
  res.status(200).json({ demodata: demodata });
});

app.post("/displaydata", async (req, res) => {
  const disp = await DemoModel.find({
    url: { $in: req.body.data.map((item) => item.shoes.url) },
  });
  console.log(disp);
  res.status(200).json({ disp: disp });
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(200).json("The token was not available");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json("Token is wrong");
      } else {
        req.user = { email: decoded.email };
        return next();
      }
    });
  }
};
app.get("/home", verifyUser, (req, res) => {
  res.status(200).json({ success: "Success", email: req.user.email });
});


app.post('/getUserName',async (req,res)=>{
  console.log(req.body.email)
  if(req.body.email){
  const response = await UserModel.findOne({"email":req.body.email})
  console.log(response)
  res.status(200).json({"name":response.name})
  }
})

app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
});

app.post('/getProductData', async (req, res) => {
    const response = await NikeModel.findOne({
      "shoes.url": req.body.url,
    });
    if(response.shoes){
    const { url, shoedesc } = response.shoes;
    console.log(url)
    console.log(shoedesc)
    res.status(200).json({ url, desc: shoedesc });
    }
});


app.post("/insertOrder", async (req, res) => {
  try {
    const response1 = await OrderModel.create({
      desc: req.body.desc,
      url: req.body.url,
      email: req.body.email,
      size: req.body.size,
      address: req.body.address,
      phone: req.body.phone,
      price: req.body.price,
      date:new Date()
    });
    if(response1){
    console.log(response1)
    res.status(200).json({"msg": "Ordered"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({"error": "Internal Server Error"});
  }
});

app.post("/wish", async (req, res) => {
  if(req.body.email){
  try {
    const emailcheck = await WishModel.find({
    email:req.body.email
    })
    const urlCheck = await WishModel.find({
      email:req.body.email,
      url: req.body.url,
    });
    console.log(!urlCheck)
    console.log(req.body.url)
    console.log(req.body.email)
    console.log(req.body.desc)
    console.log(req.body.discount)
    console.log(req.body.price)
    if (urlCheck.length === 0) {
      const newWish = await WishModel.create({
        email: req.body.email,
        url: req.body.url,
        desc: req.body.desc,
        discount: req.body.discount,
        price: req.body.price,
      });
      console.log(newWish);
      res.status(200).json({ "msg": "Done Wish" });
    } else {
      res.status(200).json({ "url": "already exists" });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ "msg": "Internal Server Error" });
  }
}
});

app.post('/getwish',async(req,res)=>{
  const response = await WishModel.find({
    email:req.body.email
  })
  res.status(200).json({"disp":response})
})
