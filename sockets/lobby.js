import lobbyService from '../controllers/lobby.js'

export default async (fastify, opts) => {
    fastify.io.of('/lobby').on('connection', socket => {

        const { roomId, userId } = socket.handshake.query

        const lobby = new lobbyService(socket, fastify.db.schemas.lobbys, roomId, userId)

        socket.on('team:join', lobby.teamJoin)
        socket.on('team:update', lobby.teamUpdate)
    })
}


