
module.exports = async (req,res)=>{
        
        return res.status(200).json({
            data:req.session.user??null
        })
}