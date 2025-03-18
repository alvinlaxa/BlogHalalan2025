const express = require("express");
const { verifyUser, verifyAdmin } = require("../middleware/authMiddleware");
const { createComment, getComments, deleteComment } = require("../controllers/commentController");

const router = express.Router();

// Public Route - Get comments for a post
router.get("/:postId", getComments);

// Authenticated Users - Create a comment
router.post("/:postId", verifyUser, createComment);

// Admin Route - Admins can delete any comment
router.delete("/:commentId", verifyUser, verifyAdmin, deleteComment);

module.exports = router;
