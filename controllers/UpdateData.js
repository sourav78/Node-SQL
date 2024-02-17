const con = require("../database")

const updateDataFromTable = (req, res) => {
    const { name, newName } = req.body

    try {
        const sql = `UPDATE customers SET name = '${newName}' WHERE name = '${name}'`
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

module.exports = updateDataFromTable