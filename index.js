const express = require("express")
const expressLayout = require('express-ejs-layouts')
const mysql = require("mysql")
const path = require('path')
const homeRoutes = require('./routes/home-routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use(expressLayout)

app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes)

app.listen(8080, () => {
    console.log("App Ready on url http://localhost:8080")
})