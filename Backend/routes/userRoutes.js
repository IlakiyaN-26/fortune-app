const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get the userDetails 
router.get('/users', async(req,res)=>{
    try{
        const user = await User.find().select('name email');
        res.status(200).json({
            success : true,
            data : user
        })
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message  ?? "User details not found"
        })
    }
})

module.exports = router;