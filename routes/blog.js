const express = require("express");
const { createBlog, getBlogs } = require("../controllers/blog.js");
const authentication = require("../middleware/auth.js");
const router = express.Router();



// Create Blog
router.post("/addblog",authentication,createBlog);


// Get All Blogs
router.get("/getblog",authentication,getBlogs);



module.exports = router;