const con = require("../database");

const CreateTable = (req, res) => {
    try {

        const sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), addres VARCHAR(255))";
        con.query(sql, (err) => {
            if (err) throw err;
            return res.json({
                success: true,
                msg: "Database created"
            })
        })
    } catch (e) {
        console.log(e);
        return res.json({
            success: true,
            msg: `Database not creates ${e}`
        })
    }
}

module.exports = CreateTable