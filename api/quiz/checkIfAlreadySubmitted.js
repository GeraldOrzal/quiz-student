
module.exports = async (req,res)=>{
    
    
    const conn = await require("../config/connection")()
    
    
    const [answers,fields] = await conn.execute("SELECT * FROM `history` WHERE quiz_id = ? AND user_id = ?",[req.params.id,req.session.id])
    conn.end();
    if(answers.length!=0){
        
        return res.status(403).json({
            message:"THE USER ALREADY TOOK THE QUIZ",
            status:403
        });
    }
    
    return res.status(200).json({
        message:"CLEARED",
        status:200
    });
    
    
    
    
    
}