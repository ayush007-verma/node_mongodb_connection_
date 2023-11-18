
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("./Routes/routes")

const express = require("express")
const connection = require("./Database/connection")
const app = express()

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())

connection()

app.use("/", router)


app.listen(5000, ()=>{
    console.log(`5000 is running...`)
})