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

const getByIdAllInfo = async id => {
    let tasks = await db('tasks').where({project_id: id}).select('id', 'description', 'notes', 'completed');
    tasks = tasks.map(task => ({
        ...task,
        completed: !!task.completed
    }));
    const resources = await db('resources')
        .join('projects_resources', 'resources.id', 'projects_resources.resource_id')
        .where('projects_resources.project_id', 2)
        .select('resources.id', 'resources.name', 'resources.description');
    return {
        ... await getById(id),
        tasks,
        resources
    } 
}

module.exports = {
    getAll,
    getById,
    add,
    getTasks,
    getByIdAllInfo
}