const router = require("express").Router();
const userAuthRoutes = require("./login");

// User Auth routes
router.use("/login", userAuthRoutes);

module.exports = router;
