const db = require('../db-config');

const getAll = () => db('resources');

const getById = id => db('resources').where({id}).first();

const add = async resource => {
    const [id] = await db('resources').insert(resource, 'id');
    return getById(id);
}

const remove = id => {
    return db('resources').where({id}).del();
}

const update = async (id, changes) => {
    const count = await db('resources').where({id}).update(changes);
    return count ? getById(id) : null;
}

module.exports = {
    getAll,
    getById,
    add,
    remove,
    update
}