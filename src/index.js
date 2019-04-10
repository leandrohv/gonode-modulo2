const server = require('./server')

/* subindo serviço na porta 3000 */
server.listen(process.env.PORT || 3000)
