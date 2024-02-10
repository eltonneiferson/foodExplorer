exports.up = knex => knex.schema.createTable("categories", table => {
    table.increments('id')
    table.varchar('category').notNullable()
    
    table.integer("user_id").references("id").inTable("users")
        
    table.timestamp("created_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("categories")