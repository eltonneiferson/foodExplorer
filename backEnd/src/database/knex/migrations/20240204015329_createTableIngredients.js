exports.up = knex => knex.schema.createTable("ingredients", table => {
    table.increments('id')
    table.varchar('name').notNullable()
    
    table.integer("user_id").references("id").inTable("users")
    table.integer("product_id").references("id").inTable("products").onDelete("CASCADE")
    
    table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("ingredients")