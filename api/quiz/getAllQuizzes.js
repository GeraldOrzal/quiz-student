
module.exports = async (req,res)=>{
    const conn = await require("../config/connection")()
    console.log(req.session)
    const [quizzes,fields] = await conn.execute("SELECT * FROM `quiz_list`",[])
    const [questions,fields1] = await conn.execute("SELECT * FROM `quiz_list` INNER JOIN questions on quiz_list.id = questions.qid",[]);
    conn.end();
    return res.json(quizzes.map((quiz)=>{
        return {
            quiz:quiz,
            questions: [{
                title:"Multiple",
                questions:[...questions.filter((data)=>{
                    if(quiz.id==data.qid){
                        return{
                            ...data,
                            userAnswer:null
                        }
                    }
                })]
            }]
        }
    }));
    
}