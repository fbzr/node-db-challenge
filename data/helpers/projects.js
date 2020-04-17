const db = require('../db-config');

const getAll = () => db('projects');

const getById = id => db('projects').where({id}).first();

const add = async project => {
    const [id] = await db('projects').insert(project, 'id');
    return getById(id);
}

const getTasks = id => {
    return db('tasks').where({project_id: id});
}

module.exports = {
    getAll,
    getById,
    add,
    getTasks
}