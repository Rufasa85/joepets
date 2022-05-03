const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

module.exports = router;