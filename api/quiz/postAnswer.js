
module.exports = async (req,res)=>{
    
    
    
    const conn = await require("../config/connection")()
    const [takers,fields0] = await conn.execute("SELECT * FROM `quiztakers` WHERE sessid=? AND quiz_id = ? AND userid=?",[req.session.id,req.body.quiz_id,req.session.user.id]);
    let template = "INSERT INTO `answers`(`user_id`, `quiz_id`, `question_id`, `option_id`, `is_right`) VALUES "
    let initial = ""
    req.body.allAnswers.forEach((ques)=>{
        if(initial==""){
            initial = `(${req.session.user.id},${req.body.quiz_id},${ques.id},${ques.answer},${ques.is_right})`
        }else{
            initial = initial.concat(`, (${req.session.user.id},${req.body.quiz_id},${ques.id},${ques.answer},${ques.is_right})`)
        }

    })
    template = template.concat(initial)
    console.log(takers.length)    
    const [inserts,fields1] = await conn.execute(template,[]);
    const [answers,fields] = await conn.execute("SELECT * FROM `history` WHERE quiz_id = ? AND user_id = ?",[req.body.quiz_id,req.session.user.id])
    
    if(answers.length==0){
        await conn.execute("DELETE FROM `quiztakers` WHERE id=?",[takers[0].id]);
        const [history,fields] = await conn.execute("INSERT INTO `history`(`quiz_id`, `user_id`, `score`, `total_score`) VALUES (?,?,?,?)",[req.body.quiz_id,req.session.user.id,req.body.score,req.body.totalscore])
        //quizTakers[req.body.quiz_id] = quizTakers[req.body.quiz_id].filter((x)=>x.sessid!=req.session.id);
        conn.end();
        return res.status(200).json({
            message:"SUCCESS"
        });
    }else{
        conn.end();
        return res.status(403).json({
            message:"THE USER ALREADY TOOK THE QUIZ"
        });
    }
    
    
    
    
}