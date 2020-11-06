const express = require("express");
const router = express.Router();

// Middleware
const {
  requireSignIn,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");

// requireSignIn, authMiddleware, - loggedIn users only
// requireSignIn, authMiddleware, adminMiddleware - admin only

// Controllers
const { readProfile } = require("../controllers/user");

// routes
router.get("/user", requireSignIn, authMiddleware, readProfile);
router.get("/admin", requireSignIn, adminMiddleware, readProfile);

module.exports = router;
