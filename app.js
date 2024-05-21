require("dotenv").config()

const express = require("express")
const app = express()
const product = require("./router/product-router")

const connectDB = require("./db/connect")

//middleware
app.use(express.static("./dist"))
app.use(express.json())

//route
app.use("/api/v1/product", product)

const port = process.env.PORT || 2000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log("connected..."))
    } catch (error) {
        console.log(error)
    }
}

start()
