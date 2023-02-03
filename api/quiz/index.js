
const router = require("express").Router();
const checkSubmitted = require("./checkIfAlreadySubmitted");
const getAllQuiz = require("./getAllQuizzes")
const getChoices = require("./getChoices")
const postAnswer = require("./postAnswer")
const viewQuiz = require("./viewQuiz")

router.get("/quiz",getAllQuiz);
router.get("/choices/:id",getChoices);

router.get("/quiz/:id",checkSubmitted);

router.get("/viewquiz/:id",viewQuiz);
router.post("/answer",postAnswer);



module.exports = router;