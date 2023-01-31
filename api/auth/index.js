
const router = require("express").Router();
const login = require("./login");
const getUser = require("./getUser");


router.post("/login",login);
router.get("/user",getUser);



module.exports = router;