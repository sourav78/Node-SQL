
const mysql = require("mysql")

function connectDB() {
    const con = mysql.createConnection({
        host: process.env.HOST_NAME,
        user: process.env.USER_NAME,
        password: "",
        database: process.env.DATABASE
    })

    try {
        con.connect((err) => {
            if (err) throw err
            console.log("Connected");

        })
    } catch (error) {
        console.log(error);
    }

    return con
}

const con = connectDB()

module.exports = con