import pl from 'fastify-plugin'
import { Server } from 'socket.io'

export default pl(async function (fastify, opts) {
  fastify.decorate('io', new Server(fastify.server, {cors: { origin: '*' }}))

  fastify.addHook('onClose', (fastify, done) => {
    fastify.io.close()
    done()
  })
})