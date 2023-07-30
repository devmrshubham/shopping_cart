const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const Default = require("./Default")
const app = express();
const port = 5000;

const productRouter = require("./Router/Product")

//middleware part
app.use(express.json())
app.use(cors())

//router part
app.use("/product", productRouter)


mongoose.connect("mongodb+srv://shubhamdewangan:1997@cluster0.dhzvpk4.mongodb.net/?retryWrites=true&w=majority")
    .then(
        (success) => {
            console.log("yess databse conneted")

            app.listen(port, () => {
                console.log(`this server is running on at http://localhost:${port}`)
            })

        }
    ).catch(
        (error) => {
            console.log("Database not connected")
            console.log(error.message)
        }
    )


Default()


