const express = require('express');

const server = express();
server.use(express.json());

// routes
server.use('/api/resources', require('./api/routes/resources'));
server.use('/api/projects', require('./api/routes/projects'));

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`**** Server running on port ${PORT} ****`));