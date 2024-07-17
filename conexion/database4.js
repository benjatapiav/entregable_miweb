const mysql = require("promise-mysql");
const dotenv = require("dotenv");
dotenv.config()

const connection4 = mysql.createConnection({
    host:process.env.host,
    database:process.env.database,
    user:process.env.user,
    password:process.env.password
})

const getConnection = async ()=> await connection4;

module.exports = {
    getConnection

}