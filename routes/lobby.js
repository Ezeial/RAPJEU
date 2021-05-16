export default async (fastify, opts) => {
    fastify.decorate('model', fastify.db.schemas.lobbys)

    fastify.get('/:id', async (req, reply) => {
        const { id } = req.params
        
        return fastify.model.findOne({ roomId: id })
    })

    fastify.get('/', async (req, reply) => fastify.model.find({}))

    fastify.post('/', async (req, reply) => {
        const { roomId } = req.body
        const newLobby = new fastify.model({ roomId, users: [], teams: [{ img: '', name: ''}, { img: '', name: ''}, { img: '', name: ''}, { img: '', name: ''}] })
        try {   
            await newLobby.save()
            reply.code(200).send('Empty lobby succesfully created')
        } catch (err) {
            return err
        }
    })

    fastify.put('/:roomId', async (req, reply) => {
        const { roomId } = req.params
        const { username } = req.body

        try {
            const newLobby = await fastify.model.findOneAndUpdate({ roomId }, { $push: { users: { username, team: 0 } }}, { new: true })
            const user = newLobby.users.find(user => user.username = username)
            return { newLobby, user }
        } catch (err) {
            return err
        }
    })

    fastify.delete('/:roomId', async (req, reply) => {
        const { roomId } = req.params

        return fastify.model.findOneAndDelete({ roomId })
    })
}