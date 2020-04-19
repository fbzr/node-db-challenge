const projectsDb = require('../../data/helpers/projects');
const verifyProjectId = require('../middleware/verifyProjectId');

const express = require('express');
const router = express.Router();

router.use('/:id', verifyProjectId);

// @route   GET /api/projects
// @desc    Return all projects
router.get('/', async (req, res, next) => {
    try {
        const projects = await projectsDb.getAll();
        res.json(projects);
    } catch(err) {
        next(err);
    }
});

// @route   POST /api/projects
// @desc    Add new project
router.post('/', async (req, res, next) => {
    try {
        const project = await projectsDb.add(req.body);
        res.status(201).json(project);
    } catch(err) {
        next(err);
    }
});

// @route   GET /api/projects/:id/tasks
// @desc    Return tasks of projects
router.get('/:id/tasks', async (req, res, next) => {
    try {
        const tasks = await projectsDb.getTasks(req.params.id);
        res.json(tasks);
    } catch(err) {
        next(err);
    }
});

// @route   POST /api/projects/:id/tasks
// @desc    Add new task to a project
router.post('/:id/tasks', async (req, res, next) => {
    try {
        const task = await projectsDb.addTask(req.params.id, req.body);
        res.status(201).json(task);
    } catch(err) {
        next(err);
    }
});

// @route   GET /api/projects/:id
// @desc    Return a specific project with all its information
router.get('/:id', async (req, res, next) => {
    try {
        const project = await projectsDb.getByIdAllInfo(req.params.id);
        res.json(project);
    } catch(err) {
        next(err);
    }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
router.delete('/:id', async (req, res, next) => {
    try {
        await projectsDb.remove(req.params.id);
        res.json({
            message: 'Project successfully removed'
        });
    } catch(err) {
        next(err);
    }
});

// @route   PUT /api/projects/:id
// @desc    Update a project
router.put('/:id', async (req, res, next) => {
    try {
        const project = await projectsDb.update(req.params.id, req.body);
        res.json(project);
    } catch(err) {
        next(err);
    }
});

module.exports = router;