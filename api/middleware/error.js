module.exports = (err, req, res, next) => {
    res.status(500).json({
        errorMessage: 'There was an error executing the operation',
        error: err
    })
}