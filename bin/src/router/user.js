const handleUserRouter = (req, res) => {
    const method = req.method


    if (method === 'GET' && req.path === '/api/user/login') {
        return {
            msg: 'dasd'
        }
    }

}
module.exports = handleUserRouter
