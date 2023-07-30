const { products } = require("./product")
const productSchema = require("./Model/Product");


const Default = () => {

    try {

        productSchema.insertMany(products)
            .then(
                (success) => {
                    console.log("data Added successfully")
                }
            ).catch(
                (error) => {
                    console.log("product not added")

                }
            )


    } catch (error) {
        console.log(error)
    }
}

module.exports = Default




