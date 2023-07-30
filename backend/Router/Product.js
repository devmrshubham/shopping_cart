const express = require("express");
const Router = express.Router();
const { ProductController } = require("../Controller/Product")

Router.get("/:id?", (req, res) => {
    try {
        const response = new ProductController().GetData(req.params.id);
        response.then(
            (success) => {
                res.send(success)
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    } catch (error) {
        res.send(error)
    }
})

module.exports = Router