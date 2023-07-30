const Product = require("../Model/Product")
class ProductController {
    GetData = (id) => {
        return new Promise(async (resolve, rejected) => {
            try {
                if (id !== undefined) {
                    let data = await Product.findById({ _id: id });
                    if (data == null) {
                        rejected(
                            {
                                msg: "data Not found",
                                status: 0
                            }
                        )
                    } else {
                        resolve(
                            {
                                Data: data,
                                status: 1
                            }
                        )
                    }
                } else {
                    let data = await Product.find();
                    resolve(
                        {
                            Data: data,
                            status: 1
                        }
                    )
                }

            } catch (error) {

                rejected(
                    {
                        msg: "internal server error",
                        status: 0
                    }
                )
            }

        })
    }
}

module.exports = { ProductController }