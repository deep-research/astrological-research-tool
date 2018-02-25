const router = require("express").Router();
const loginRoutes = require("./login");
const registerRoutes = require("./register");
const eventRoutes = require("./event");

// User Auth routes
router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/event", eventRoutes);

module.exports = router;
