import pl from 'fastify-plugin'
import { Server } from 'socket.io'

export default pl(async function (fastify, opts) {
  fastify.decorate('io', new Server(fastify.server, opts));

  fastify.addHook('onClose', (fastify, done) => {
    fastify.io.close();
    done();
  });
});