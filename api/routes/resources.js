const resourcesDb = require('../../data/helpers/resources');
const express = require('express');
const router = express.Router();

// @route   GET /api/resources
// @desc    Return all resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await resourcesDb.getAll();
        res.json(resources);
    } catch(err) {
        next(err);
    }
});

// @route   POST /api/resources
// @desc    Add new resources
router.post('/', async (req, res, next) => {
    try {
        const resources = await resourcesDb.add(req.body);
        res.json(resources);
    } catch(err) {
        next(err);
    }
});

module.exports = router;