const querystring = require('querystring')

const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHendle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const url = req.url
    req.path = url.split('?')[0]
    
    req.query = querystring.parse(url.split('?')[0])
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        
        res.end(JSON.stringify(blogData))
        return
    }
    const UserData = handleUserRouter(req, res)
    if (UserData) {
        res.end(JSON.stringify(UserData))
        eturn
    }
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("404 not found")
    res.end()
}
module.exports = serverHendle
