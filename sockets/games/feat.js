export default async (fastify, opts) => {
    const games = []

    fastify.io.of('/games/').on('connection', socket => {
        const { roomId, userId } = socket.handshake.query
        
        const lobby = new lobbyService(fastify.io, socket, fastify.db.schemas.lobbys, roomId, userId)

        socket.on('lobby:join', lobby.lobbyJoin)
        socket.on('team:join', lobby.teamJoin)
        socket.on('team:update', lobby.teamUpdate)
    })

}

