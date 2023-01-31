
module.exports = async (req,res)=>{
    const conn = await require("../config/connection")()
    const [choices,fields] = await conn.execute("SELECT * FROM `question_opt` WHERE question_id = ?",[req.params?.id])
    conn.end();
    return res.json(choices);
    
}