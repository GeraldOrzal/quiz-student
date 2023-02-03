
const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const getUser = require("./getUser");


router.post("/login",login);
router.post("/logout",logout);
router.get("/user",getUser);



module.exports = router;