const router = require("express").Router();
const loginRoutes = require("./login");
const registerRoutes = require("./register");

// User Auth routes
router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

module.exports = router;
