require("dotenv").config()

const express = require("express")
const app = express()
const product = require("./router/product-router")
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")

const connectDB = require("./db/connect")
const errorHandlerMiddleware = require("./middleware/error-handler")

//middleware
app.use(express.static("./dist"))
app.use(express.json())

//route
app.use("/api/v1/product", product)
app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 2000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Connected to ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
