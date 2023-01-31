
module.exports = async (req,res)=>{
    
    
    const conn = await require("../config/connection")()
    const [answers,fields] = await conn.execute("SELECT * FROM `history` WHERE quiz_id = ? AND user_id = ?",[req.body.quiz_id,req.session.id])
    if(answers.length==0){
        const [history,fields] = await conn.execute("INSERT INTO `history`(`quiz_id`, `user_id`, `score`, `total_score`) VALUES (?,?,?,?)",[req.body.quiz_id,req.session.id,req.body.score,req.body.totalscore])
        conn.end();
        return res.status(200).json(history);
    }else{
        conn.end();
        return res.status(403).json({
            error:"THE USER ALREADY TOOK THE QUIZ"
        });
    }
    
    
    
    
}