const con = require("../database")

const deleteFromTable = (req, res) => {
    const { name } = req.body

    try {
        const sql = `DELETE FROM customers WHERE name = '${name}'`
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

module.exports = deleteFromTable