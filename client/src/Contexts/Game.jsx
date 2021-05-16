import React, { useContext, useState, useReducer } from 'react'

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

const Provider = ({ children }) => {
    const [user, setUser] = useState({})
    const [lobby, dispatchLobby] = useReducer(lobbyReducer, {})

    const fetchLobby = (username, method = 'GET', id = '') => {
        return fetch(`http://127.0.0.1:3001/api/lobbys/${id}`, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ username })
        })
        .then(res => res.json())
        .then(json => {
            setUser(json.user)
            dispatchLobby({type: 'lobby', payload: json.newLobby})
            return json
        })
        .catch(console.error)
    }

    const modifyUser = (newProp) => setUser(prev => ({ ...prev, ...newProp}))
    
    return <GameContext.Provider value = { { user, lobby, fetchLobby, dispatchLobby, modifyUser } }>
        { children }
    </GameContext.Provider>
}

const useGameStore = () => useContext(GameContext)

export default Provider

export { useGameStore }