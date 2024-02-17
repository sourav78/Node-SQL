const con = require("../database");

const InsertIntoTable = (req, res) => {

    const { name, address } = req.body

    try {
        const sql = `INSERT INTO customers (name, addres) VALUES ('${name}', '${address}')`;

        con.query(sql, (err, data) => {
            if (err) throw err
            return res.json({
                success: true,
                msg: data
            })
        })
    } catch (error) {
        return res.json({
            success: true,
            msg: error
        })
    }
}

module.exports = InsertIntoTable