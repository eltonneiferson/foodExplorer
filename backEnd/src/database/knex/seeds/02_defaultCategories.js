exports.seed = async function(knex) {

  await knex('categories').del()
  
  await knex('categories').insert([
    {
      category: 'Refeições',
      user_id: 1
    },
    {
      category: 'Sobremesas',
      user_id: 1
    },
    {
      category: 'Bebidas',
      user_id: 1
    }
  ])
}