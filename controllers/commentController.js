const Comment = require("../models/Comment");
const Post = require("../models/Post");

// Create a comment
exports.createComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { postId } = req.params;

    const newComment = new Comment({
      text,
      post: postId,
      author: req.user.id,
    });

    const savedComment = await newComment.save();

    // Update the post with the new comment
    await Post.findByIdAndUpdate(postId, { $push: { comments: savedComment._id } });

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: "Error creating comment", error });
  }
};

// Get all comments for a specific post
exports.getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId }).populate("author", "username");

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
};

// Delete a comment (Admin only)
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    await comment.deleteOne();
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
};
