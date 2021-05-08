import mongoose from 'mongoose'

const lobbySchema = mongoose.Schema({
    roomId: String,
    users: [{ username: String, team: Number }],
    teams: [{ img: String, name: String }]
})

export default mongoose.model('lobbys', lobbySchema)