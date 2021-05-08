const socket = io('/lobby', {
    query: {    
        userId: '6092075a8493910700ffd007',
        roomId: 'cc38'
    }
})

socket.on('connect', () => console.log('an user has joined the app'))

// REAL TIME HANDLER

socket.on('team:join', (user, index) => console.log(`handle team changement ${user.username} change for team ${index}`))
socket.on('team:update', (property, index) => console.log(`handle team ${index} update new prop : ${JSON.stringify(property)}`))

// REAL TIME SERVICES 

const joinTeam = i => socket.emit('team:join', i)

const updateTeam = (property, index) => socket.emit('team:update', property, index)