
module.exports = async (req,res)=>{
    
    
    req.session.destroy();
    return res.status(200).json({
        redirect:"/",
        status:200
    });
    
    
    
    
    
}