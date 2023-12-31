exports.up = knex =>
  knex.schema.createTable('ingredients', table => {
    table.increments('id')
    table.string('title')
    table.string('img')

    table
    .references('id')
      .integer('plate_id')
      .inTable('plates')
      .onDelete('CASCADE')
  })

exports.down = function (knex) {}
