const con = require("../database")

const ReadData = (req, res) => {

    try {
        const sql = "SELECT *FROM customers"
        con.query(sql, (err, data) => {
            if (err) {
                return res.json({
                    success: false,
                    msg: err
                })
            }
            return res.json({
                success: true,
                msg: data
            })
        })
    } catch (err) {
        return res.json({
            success: false,
            msg: err
        })
    }
}

module.exports = ReadData