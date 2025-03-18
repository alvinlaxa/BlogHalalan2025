const express = require("express");
const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");
const { getPosts, getPostById, createPost, updatePost, deletePost } = require("../controllers/postController");

const router = express.Router();

// Public Routes
router.get("/", getPosts);
router.get("/:id", getPostById);

// Authenticated Users Only
router.post("/", verifyUser, createPost);
router.put("/:id", verifyUser, updatePost);

// Admin and Author Delete Post Route
router.delete("/:id", verifyUser, verifyAdmin, deletePost);

module.exports = router;
