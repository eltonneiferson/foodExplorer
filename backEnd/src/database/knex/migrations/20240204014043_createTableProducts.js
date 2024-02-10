exports.up = knex => knex.schema.createTable("products", table => {
    table.increments('id')
    table.varchar('name').notNullable()
    table.varchar('description')
    table.varchar('price')
    table.varchar('image')

    table.integer("category_id").references("id").inTable("categories").onDelete("CASCADE")
    table.integer("user_id").references("id").inTable("users")

    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("products")