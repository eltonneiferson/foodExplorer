const knex = require('../database/knex')
const DiskStorage = require("../providers/DiskStorage")
const AppError = require('../utils/AppError')

class ProductsController {
    async create(req, res) {
        const { name, description, price, category_id } = req.body
        const imageProduct = req.file.filename
        const ingredients = JSON.parse(req.body.ingredients)
        const { id: user_id } = req.user
        
        if( !name || !description || !price || !ingredients || !category_id ) {
            throw new AppError("Todos os campos são obrigatórios!")
        }
        
        const diskStorage = new DiskStorage()
        const image = await diskStorage.saveFile(imageProduct)
        
        const [product_id] = await knex("products").insert({name, description, price, image, category_id, user_id})

        const ingredientsInsert = ingredients.map(ingredient => {
            return {
                product_id,
                user_id,
                name: ingredient
            }
        })
        
        await knex("ingredients").insert(ingredientsInsert)
        
        return res.status(201).json({product_id})
    }

    async update(req, res) {
        const { name, description, price, category_id } = req.body
        const selectedProductImage = req.file
        const { id } = req.params

        if (!name || !description || !price) {
            throw new AppError("Todos os campos são obrigatórios!")
        }

        const [ product ] = await knex("products").where("id", id)
        const diskStorage = new DiskStorage()

        if (!product) {
            throw new AppError("Produto não encontrado!")
        }

        if(selectedProductImage) {
            const imageProduct = req.file.filename

            if (product.image) {
                await diskStorage.deleteFile(product.image)
            }

            const image = await diskStorage.saveFile(imageProduct)
            await knex("products").update({ image }).where("id", id)
        }

        await knex("products").update({name, description, price, category_id, updated_at: knex.fn.now()}).where("id", id)

        return res.json()
    }

    async delete(req, res) {
        const { id } = req.params

        const [ product ] = await knex('products').select().where("id", id)

        if (!product) {
            throw new AppError("Produto não encontrado!")
        }

        await knex('products').where("id", id).del()

        return res.status(200).json()
    }

    async searchAllProducts(req, res) {
        const { search } = req.query
        const products = await knex("products")
            .where("products.name", "like", `%${search}%`)
            .orWhere("ingredients.name", "like", `%${search}%`)
            .innerJoin("categories", "categories.id", "products.category_id")
            .innerJoin("ingredients", "ingredients.product_id", "products.id")
            .select("products.*","categories.category", knex.raw("GROUP_CONCAT(ingredients.name) as ingredients"))
            .groupBy("products.id")

        if (!products || products.length === 0) {
            return res.status(404).send("Nenhum produto encontrado!")
        }
        
        return res.json(products)
    }

    async searchProduct(req, res) {
        const { id } = req.params
        const product = await knex("products")
            .where({ "products.id": id })
            .innerJoin("categories", "categories.id", "products.category_id")
            .innerJoin("ingredients", "ingredients.product_id", "products.id")
            .select("products.*","categories.category", knex.raw("GROUP_CONCAT(ingredients.name) as ingredients"))
            .first()
        
        return res.json({product})
    }
}

module.exports = ProductsController