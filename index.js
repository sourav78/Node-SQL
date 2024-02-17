require('dotenv').config()
const express = require('express')
const CreateTable = require('./controllers/CreateTable')
const InsertIntoTable = require('./controllers/InsertData')
const ReadData = require('./controllers/ReadData')
const deleteFromTable = require('./controllers/DeleteData')
const updateDataFromTable = require('./controllers/UpdateData')

const app = express()
const port = 3001

app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/table-create', CreateTable)
app.post("/insert-data", InsertIntoTable)
app.post("/delete-data", deleteFromTable)
app.post("/update-data", updateDataFromTable)
app.get("/read-data", ReadData)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))