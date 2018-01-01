exports.up = async function(knex) {
  await Promise.all([
    // the content of a report presented to a user
    knex.schema.createTable('report', table => {
      table.primary('name');
      table.string('title');
      table.string('content');
      table.boolean('require_access').default(false);
      table.boolean('top_level').default(false);
      table.json('traits'); // e.g., [ "gene:mthfr", "gene:grik3" ]
    }),
    // tracks the variant a user has for a particular gene
    knex.schema.createTable('user_trait', table => {
      table.increments();
      table.string('user_id');
      table.string('trait'); // e.g., 'gene:mthfr' - used as an index
      table.json('value');

      // for indexing we can add later:
      // table.string('trait_type'); // e.g., 'gene'
      // table.string('trait_name'); // e.g., 'mthfr'
    })
  ]);

  await Promise.all([
    //  tracks reports accessible to a user
    knex.schema.createTable('user_report_access', table => {
      table
        .integer('user_id')
        .references('id')
        .inTable('user')
        .onDelete('CASCADE');
      table
        .integer('report_id')
        .references('id')
        .inTable('report')
        .onDelete('CASCADE');
      table.string('pac_id'); // helix PAC ID uniquely identifies user for this app
      table.unique(['user_id', 'report_id']);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('report'),
    knex.schema.dropTable('user_trait'),
    knex.schema.dropTable('user_unlocked_report')
  ]);
};
