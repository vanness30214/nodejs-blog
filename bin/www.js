const http =require('http')
const PORT =8001
const serverHendle = require('./app.js')
const server =http.createServer(serverHendle)
server.listen(PORT)
