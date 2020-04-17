const db = require('../db-config');

const getAll = () => db('resources');

const getById = id => db('resources').where({id}).first();

const add = async resource => {
    const [id] = await db('resources').insert(resource, 'id');
    return getById(id);
}

module.exports = {
    getAll,
    getById,
    add
}