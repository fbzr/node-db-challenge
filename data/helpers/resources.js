const db = require('../db-config');

const getAll = () => db('resources');

const getById = id => db('resources').where({id}).first();

module.exports = {
    getAll,
    getById
}