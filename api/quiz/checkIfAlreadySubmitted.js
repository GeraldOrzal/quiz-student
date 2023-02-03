

module.exports =async (req,res)=>{
    
    
    if(!req.session.user){
        return;
    }
    const conn = await require("../config/connection")()
    
    
    const [takers,fields1] = await conn.execute("SELECT * FROM `quiztakers` WHERE quiz_id = ? AND userid=?",[req.params.id,req.session.user.id]);
    const [answers,fields] = await conn.execute("SELECT * FROM `history` WHERE quiz_id = ? AND user_id = ?",[req.params.id,req.session.user.id])
    
    
    
    if(takers.length!=0&&takers[0].sessid!=req.session.id){
        
        return res.status(403).json({
            message:"THE USER CURRENTLY THE QUIZ",
            status:403
        });
    }
    if(answers.length!=0){
        
        return res.status(403).json({
            message:"THE USER ALREADY TOOK THE QUIZ",
            status:403
        });
    }
    if(takers.length==0){
        const [result,fields3] = await conn.execute("INSERT INTO `quiztakers`(`sessid`, `quiz_id`, `userid`) VALUES (?,?,?) ",[req.session.id,req.params.id,req.session.user.id]);
    }
    conn.end();
    return res.status(200).json({
        message:"CLEARED",
        status:200
    });
    
    
    
    
    
}