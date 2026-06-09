
const Blog = require('../models/blog.js')



exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

      console.log(req.user,"!@!")

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }

    // Create blog
    const blog = await Blog.create({
      title,
      content,
      user:req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user","name -_id")

    res.status(200).json({
      success: true,
      count: blogs.length,
      blogs,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};