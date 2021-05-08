export default class LobbyService {

    constructor (socket, db, roomId, userId) {
        this.socket = socket
        this.db = db
        this.roomId = roomId
        this.userId = userId

        this.socket.join(this.roomId)

        this.teamJoin = this.teamJoin.bind(this)
        this.teamUpdate = this.teamUpdate.bind(this)
    }

    async teamJoin (index) {
        try {
            const lobby = await this.db.findOne({ roomId: this.roomId })
            const user = lobby.users.id(this.userId)
            user.team = index
            await lobby.save()
        } catch (err) {
            console.error(err)
        } 

        this.socket.to(this.roomId).emit('team:join', user, index)

        console.log(`${user.username} has joined team ${index}`)
    }

    async teamUpdate (property, index) {
        try {
            const lobby = await this.db.findOne({ roomId: this.roomId })
            lobby.teams[index] = { ...lobby.teams[index], ...property }
            await lobby.save()
        } catch (err) {
            console.error(err)
        }
        this.socket.to(this.roomId).emit('team:update', property, index)

        console.log(`${this.userId} modified team ${index}, new prop : ${JSON.stringify(property)}`)
    }
}
