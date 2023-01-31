
const router = require("express").Router();
const checkIfAlreadySubmitted = require("./checkIfAlreadySubmitted");
const getAllQuiz = require("./getAllQuizzes")
const getChoices = require("./getChoices")
const postAnswer = require("./postAnswer")

router.get("/quiz",getAllQuiz);
router.get("/choices/:id",getChoices);

router.get("/quiz/:id",checkIfAlreadySubmitted);


router.post("/answer",postAnswer);



module.exports = router;