import { randomBytes } from 'crypto'

export default async (fastify, opts) => {
    fastify.decorate('model', fastify.db.schemas.lobbys)

    fastify.get('/:id', async (req, reply) => {
        const { id } = req.params
        
        try {
            return await fastify.model.find({ roomId: id })
        } catch (err) {
            console.error(err)
        }
    })

    fastify.get('/', async (req, reply) => {
        try {
            return await fastify.model.find({})
        } catch (err) {
            console.error(err)
        }
    })

    fastify.post('/', async (req, reply) => {
        const roomId = randomBytes(2).toString('hex')
        
        const { username } = req.body
        const newLobby = new fastify.model({ roomId, users: [{ username, team: 0 }]})
        
        console.log(username)
        try {   
            await newLobby.save()
            return {
                roomId: newLobby.roomId,
                user: newLobby.users.find(user => user.username === username)
            }
        } catch (err) {
            return err
        }
    })

    fastify.put('/:roomId', async (req, reply) => {
        const { roomId } = req.params
        const { username } = req.body

        try {
            const doc = await fastify.model.findOneAndUpdate({ roomId }, { $push: { users: { username, team: 0 } }})
            return doc.users.find(user => user.username === username)
        } catch (err) {
            return err
        }
    })

    fastify.delete('/:roomId', async (req, reply) => {
        const { roomId } = req.params

        try {
            return await fastify.model.findOneAndDelete({ roomId })
        } catch (err) {
            console.error(err)
        }
    })
}