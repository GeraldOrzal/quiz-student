
module.exports = async (req,res)=>{
    const conn = await require("../config/connection")()
    
    const [questions,fields1] = await conn.execute("SELECT * FROM `answers` INNER JOIN question_opt on answers.option_id = question_opt.id INNER JOIN questions on answers.question_id = questions.id WHERE quiz_id = ? AND user_id = ? ;",[req.params.id,req.session.user.id]);
    
    console.log(questions)
    conn.end();
    return res.status(200).json(questions);
    
}