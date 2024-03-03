exports.up = knex => knex.schema.createTable("users", table => {
    table.increments('id')
    table.varchar('name').notNullable()
    table.varchar('email').unique().notNullable()
    table.varchar('password').notNullable()
    table.varchar('avatar')
    table.boolean('is_admin')

    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("users")