
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description');
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .unique()
            .notNullable();
        tbl.string('description');
    })
    .createTable('projects_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.unique(['project_id', 'resource_id']);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description')
            .notNullable();
        tbl.string('notes');
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.unique(['id', 'project_id']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
