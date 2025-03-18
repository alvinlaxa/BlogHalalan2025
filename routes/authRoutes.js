const express = require("express");
const { register, login, getUserDetails } = require("../controllers/authController");
const { verifyUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", verifyUser, getUserDetails);

module.exports = router;
