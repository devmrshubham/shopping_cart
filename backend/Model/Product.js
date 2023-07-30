const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            unique:true

        },
        name: {
            type: String
        },
        brand: {
            type: String
        },
        desc: {
            type: String
        },
        price: {
            type: Number
        },
        image: {
            type: String
        }
    }
)

const productCart = mongoose.model("productCart", productSchema)

module.exports = productCart