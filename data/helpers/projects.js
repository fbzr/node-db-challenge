const db = require('../db-config');

const getAll = () => db('projects');

const getById = id => db('projects').where({id}).first();

module.exports = {
    getAll,
    getById
}