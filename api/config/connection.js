const mysql = require("mysql2/promise")



module.exports = async ()=>{

    const conn = await mysql.createConnection({
        database:"quiz",
        port:"3306",
        user:"root",
        password:""
    })
    
    return conn;
};