exports.up = async function(knex) {
  await knex.schema.createTable("NEW fruits", tbl => {
    tbl.increments("id");
    tbl
      .text("name")
      .notNull()
      .unique();
    tbl.float("avgWeightOz");
    tbl.boolean("delicious").defaultTo(false);
  });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("NEW fruits")
};
