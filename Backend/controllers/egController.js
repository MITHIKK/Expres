const user = require('../models/userModel');
exports.getRoute = async (req,res) => {
    const userData=await user.find();
    res.status(201).json({data:userData})
      
}
exports.postRoute = async (req,res) => {
    const {username,password}= req.body;
    const exist = await user.findOne(username);
    if(exist) return res.status(401).json({
        message:"User already exists"
    })
    const newUser = new user({username,password});
    await newUser.save();
    res.status(201).json({user:newUser})

}

exports.putRoute = (req,res) => {
    res.send('Put route is working');
}
exports.deleteRoute = (req,res) => {
    res.send("Delete route");
}
