const db = require('../db-config');

const getAll = async () => (await db('projects'))
    .map(project => ({ 
        ... project, 
        completed: !!project.completed 
    })
);

const getById = async id => {
    const project = await db('projects').where({id}).first();
    return {
        ...project,
        completed: !!project.completed
    }
};

const add = async project => {
    const [id] = await db('projects').insert(project, 'id');
    return getById(id);
}

const getTasks = async id => {
    const tasks = await db('tasks').where({project_id: id});
    return tasks.map(task => ({
        ...task,
        completed: !!task.completed
    }));
}

const addTask = async (project_id, task) => {
    const [id] = await db('tasks').insert({ ...task, project_id }, 'id');
    return db('tasks').where({id}).first();
}

const getByIdAllInfo = async id => {
    let tasks = await db('tasks').where({project_id: id}).select('id', 'description', 'notes', 'completed');
    tasks = tasks.map(task => ({
        ...task,
        completed: !!task.completed
    }));
    const resources = await db('resources')
        .join('projects_resources', 'resources.id', 'projects_resources.resource_id')
        .where('projects_resources.project_id', id)
        .select('resources.id', 'resources.name', 'resources.description');
    return {
        ... await getById(id),
        tasks,
        resources
    } 
}

const remove = id => {
    return db('projects').where({id}).del();
}

const update = async (id, changes) => {
    const count = await db('projects').where({id}).update(changes);
    return count ? getById(id) : null;
}

module.exports = {
    getAll,
    getById,
    add,
    getTasks,
    addTask,
    getByIdAllInfo,
    remove,
    update
}