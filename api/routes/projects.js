const projectsDb = require('../../data/helpers/projects');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await projectsDb.getAll();
        res.json(projects);
    } catch(err) {
        next(err);
    }
});

module.exports = router;