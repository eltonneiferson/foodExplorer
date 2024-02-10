const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require("../providers/DiskStorage")

class ProductImageController {
    async update(req, res){
        const { id } = req.params
        const imageProductFileName = req.file.filename

        const diskStorage = new DiskStorage()

        const product = await knex("products").where("id", id).first()

        if (!product) {
            throw new AppError("Produto não encontrado!")
        }
        
        if (product.image) {
            await diskStorage.deleteFile(product.image)
        }

        const image = await diskStorage.saveFile(imageProductFileName)

        await knex("products").update({image}).where("id", id)

        return res.json()
    }
}

module.exports = ProductImageController