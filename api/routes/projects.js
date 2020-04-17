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
        res.json(project);
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

module.exports = router;