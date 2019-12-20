
exports.up = async function(knex) {
  await knex.schema.alterTable("NEW fruits", tbl => {
      tbl.string("color", 128)
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable("NEW fruits", tbl => {
      tbl.dropColumn("color")
  })
};
