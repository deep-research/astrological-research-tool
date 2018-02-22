const router = require("express").Router();
const userAuthRoutes = require("./userAuth");

// User Auth routes
router.use("/userAuth", userAuthRoutes);

module.exports = router;
