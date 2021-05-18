export default class LobbyService {
    constructor (io, socket, db, roomId, userId) {
        this.io = io
        this.socket = socket
        this.db = db
        this.roomId = roomId
        this.userId = userId 
        this.socket.join(this.roomId)

        this.teamJoin = this.teamJoin.bind(this)
        this.teamUpdate = this.teamUpdate.bind(this)
        this.lobbyJoin = this.lobbyJoin.bind(this)
    }

    lobbyJoin (user) {
        this.socket.to(this.roomId).emit('lobby:join', user)

        
        console.log(`${user.username} has joined lobby`)
    }

    async teamJoin (team) {
        try {
            const lobby = await this.db.findOne({ roomId: this.roomId })
            const user = lobby.users.id(this.userId)
            user.team = team
            await lobby.save()
            this.socket.to(this.roomId).emit('team:join', user, team)

            console.log(`${user.username} has joined team ${team}`)
        } catch (err) {
            console.error(err)
        } 
    }

    async teamUpdate (property, team) {
        try {
            // TODO : FIX THAT PROP DELETE THE ONE BEFORE
            const lobby = await this.db.findOne({ roomId: this.roomId })
            lobby.teams[team - 1] = { ...lobby.teams[team - 1], ...property }
            await lobby.save()
        } catch (err) {
            console.error(err)
        }
        this.socket.to(this.roomId).emit('team:update', property, team)

        console.log(`${this.userId} modified team ${team}, new prop : ${JSON.stringify(property)}`)
    }
}
