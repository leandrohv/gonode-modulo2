const server = require('./server')

/* subindo serviço na porta 3000 */
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Servidor iniciado!')
})
