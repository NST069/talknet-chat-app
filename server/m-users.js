const express=require('express');
const router = express.Router();

const User = require('./models/user');

//get all
router.get("/", async(req, res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//get one
router.get("/:id", getUser, async(req, res)=>{
    res.json(res.user);
});

//register one
router.post("/", async(req, res)=>{
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        currentRoom: ""
    });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//update one
router.patch("/:id", getUser, async(req, res)=>{
    if(req.body.name!==null){
        req.user.name = req.body.name;
    }
    if(req.body.password!==null){
        req.user.password = req.body.password;
    }
    if(req.body.currentRoom!==null){
        req.user.currentRoom = req.body.currentRoom;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
});

//delete one
router.delete("/:id", getUser, async(req, res)=>{
    try{
        await res.user.remove();
        res.json({message:"Deleted"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

async function getUser(req,res,next){
    let user;
    try{
        user = await User.findById(req.params.id);
        if(user===null)
            return res.status(404).json({message:"User not found"});
    }catch(err){
        return res.status(500).json({message:err.message});
    }
    res.user = user;
    next();
}

module.exports = router;