
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Fix balcony', description: 'Fix the messed up balcony'},
        {name: 'Add insulation in the attic', description: 'Put new insulation before summer'},
        {name: 'Build the cabinet above the fridge'},
        {name: 'Reposition the microwave', description: 'Microwave door is not opening completely because it hits on cabinet door'}
      ]);
    });
};
