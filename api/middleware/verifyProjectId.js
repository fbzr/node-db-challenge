const projectsDb = require('../../data/helpers/projects');

module.exports = async (req, res, next) => {
    try {
        const project = await projectsDb.getById(req.params.id);

        if (!project) {
            return res.status(400).json({
                errorMessage: 'Invalid project ID'
            });
        }
        
        req.project = project;
        next();
    } catch (err) {
        next(err);
    }
}