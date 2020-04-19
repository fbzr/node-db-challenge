const knex = require('knex');

const config = process.env.NODE_ENV === 'production' 
    ? require('../knexfile').production 
    : require('../knexfile').development;

module.exports = knex(config);