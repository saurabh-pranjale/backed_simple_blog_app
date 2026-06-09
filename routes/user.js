const express = require("express");
const { register, login } = require("../controllers/user");
const router = express.Router();



// Create Blog
router.post("/register",register );


// Get All Blogs
router.post("/login",login );



module.exports = router;