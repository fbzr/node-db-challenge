
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: '2x4 wood', description: '2x4 pieces'},
        {name: 'insulation', description: '32 inches width'},
        {name: 'Miter Saw'},
        {name: 'Stud finder'},
        {name: 'Microwave Bolt', description: 'JT EOR309'},
        {name: 'Cabinets'},
        {name: 'screws'},
        {name: 'Motivation'},
        {name: 'Drill'}
      ]);
    });
};
