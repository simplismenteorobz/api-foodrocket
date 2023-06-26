exports.up = knex =>
  knex.schema.createTable('plates', table => {
    table.increments('id')
    table.string('title')
    table.string('price')
    table.string('img')
    table.string('type')
    table.string('description')
  })

exports.down = knex => knex.schema.dropTable('plates')
