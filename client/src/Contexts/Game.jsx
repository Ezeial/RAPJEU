import React, { useContext, useReducer } from 'react'

const GameContext = React.createContext({})

const lobbyReducer = (state, action) => {
    switch (action.type) {
      case 'lobby':
        return action.payload
      case 'roomId':
        return {...state, roomId: action.payload}
      case 'users':
        const users = state.users
        const user = users.find(user => action.payload.username === user.username)
        user.team = action.payload.newTeam  
        return { ...state, users }
      case 'teams':
        const teams = state.teams
        const team = teams[action.payload.teamNb - 1]
        team.name = action.payload.name
        console.log(teams)
        return { ...state, teams }
      default:
        throw new Error()
    } 
  }

const Provider = ({ roomId, children }) => {
    const [lobby, dispatchLobby] = useReducer(lobbyReducer, {})
    
    console.log('from context', roomId)

    return <GameContext.Provider value = { { lobby } }>
        { children }
    </GameContext.Provider>
}

const useGameStore = () => useContext(GameContext)

export default Provider

export { useGameStore }

    // const fetchLobby = (username, method = 'GET', id = '') => {
    //     return fetch(`http://127.0.0.1:3001/api/lobbys/${id}`, {
    //         method,
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify({ username })
    //     })
    //     .then(res => res.json())
    //     .then(json => {
    //         setUser(json.user)
    //         dispatchLobby({type: 'lobby', payload: json.newLobby})
    //         return json
    //     })
    //     .catch(console.error)
    // }