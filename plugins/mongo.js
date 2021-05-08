import pl from 'fastify-plugin'
import mongoose from 'mongoose'
import lobbyModel from '../models/lobby.js'

export default pl(async (fastify, opts) => {
    try {
        const db = await mongoose.connect('mongodb://localhost/RAPJEU', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        
        fastify.decorate('db', {
            mongo: db,
            schemas: {
                lobbys: lobbyModel
            }
        })
        console.log('Database connected')
    } catch (e) {
        console.error(e)
    }
})