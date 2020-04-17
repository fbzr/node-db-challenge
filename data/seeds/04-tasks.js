
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 4, description: 'Develop motivation', notes: 'Just stop being lazy'}, //project microwave
        {project_id: 2, description: 'Go to Home Depot'}, //project insulation
        {project_id: 2, description: 'Buy insulation', notes: 'Just get a job and make some money'}, //project insulation
        {project_id: 1, description: 'Set it as a priority'}, //project balcony
        {project_id: 3, description: 'Put cabinet together'}, //project cabinet
        {project_id: 3, description: 'Find studs on the wall', notes: 'Use stud finder'},
        {project_id: 3, description: 'Put cabinet up', notes: 'Use drill'},
        {project_id: 2, description: 'Put insulation under roof', notes: 'Do not put it on the floor to keep it easy to clean if you have another rat infestation'}
      ]);
    });
};
