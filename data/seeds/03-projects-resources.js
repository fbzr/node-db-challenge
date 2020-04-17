
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects_resources').insert([
        {project_id: 4, resource_id: 5}, //project microwave //resource bolt
        {project_id: 3, resource_id: 6}, //project cabinets //resource cabinet
        {project_id: 4, resource_id: 8}, //project microwave //resource motivation
        {project_id: 1, resource_id: 3}, //project balcony //resource saw
        {project_id: 2, resource_id: 2}, //project insulation //resource insulation
        {project_id: 1, resource_id: 1}, //project balcony //resource 2x4
        {project_id: 2, resource_id: 8}, //project insulation //resource motivation
        {project_id: 3, resource_id:9}, //project cabinets //resource drill
        {project_id: 1, resource_id:9}, //project balcony //resource drill
        {project_id: 3, resource_id:4}, //project cabinets //resource stud finder
      ]);
    });
};
