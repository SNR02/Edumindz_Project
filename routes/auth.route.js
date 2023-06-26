const express = require("express");
const {
  loginHandler,
  registerHandler,
  logoutHandler,
} = require("../controllers/auth.contoller");
const { deserializeUser } = require("../middleware/deserializeUser");
const { requireUser } = require("../middleware/requireUser");
const { validate } = require("../middleware/validate");
const {
  createStudentSchema,
  loginStudentSchema,
} = require("../schema/student.schema");

const router = express.Router();

// Register can be done only by admin and we input the admin credential inside the system
// Register user route
// router.post("/register", validate(createStudentSchema), registerHandler);

// Login user route
router.post("/login", validate(loginStudentSchema), loginHandler);

// This is deserialize middleware it checks for user have a valid session and have appropriate tokens.
router.use(deserializeUser, requireUser);

// Add student or admin
// We moved this route to top, so no need for this here now
router.post("/register", validate(createStudentSchema), registerHandler);

// Logout User
router.get("/logout", logoutHandler);

module.exports = router;
