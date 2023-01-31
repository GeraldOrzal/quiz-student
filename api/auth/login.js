
module.exports = async (req,res)=>{
    
    
    const conn = await require("../config/connection")()
    const [users,fields] = await conn.execute("SELECT * FROM `users` WHERE id = ? AND password = ?",[req.body.idnumber,req.body.password])
    conn.end();
    if(users.length==0){
        return res.status(403).json({
            message:"USER NOT FOUND",
            status:403
        });
    }
    req.session.user = users[0];
    return res.status(200).json({
        user:users[0],
        status:200
    });
    
    
    
    
    
}