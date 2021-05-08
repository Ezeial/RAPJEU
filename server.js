import fastifyModule from 'fastify'
import fastifyCors from 'fastify-cors'

import mongo from './plugins/mongo.js'
import socket from './plugins/socket.js'

import lobby from './routes/lobby.js'

import lobbySocket from './sockets/lobby.js'

const fastify = fastifyModule()

// REGISTER PLUGINS
fastify.register(fastifyCors, { orgin: true })
fastify.register(mongo)
fastify.register(socket)

// REGISTER ROUTES & SOCKET HANDLER

fastify.register(lobby, { prefix: '/api/lobbys'})

fastify.register(lobbySocket)

// START SERVER

const start = async () => {
    try {
      const adress = await fastify.listen(3001)
      console.log(`server listening on: ${adress}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
start()