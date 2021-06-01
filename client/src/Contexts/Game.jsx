import React, { useContext, useReducer, useEffect } from 'react'
import { useUserStore } from './User'

const GameContext = React.createContext({})

const Provider = ({ roomId, children }) => {
    const { user, modifyUser } = useUserStore()
    const [lobby, dispatchLobby] = useReducer((state, action) => {
      switch (action.type) {
        case 'setLobby':
          return action.payload
        case 'setRoomId':
          return {...state, roomId: action.payload}
        case 'pushUser':
          let us = state.users
          us = [ ...us, action.payload ]
          return { ...state, users: us}
        case 'setUserTeam':
          const users = state.users
          const currentUser = users.find(u => u._id === action.payload.user._id)
          currentUser.team = action.payload.team 
          return { ...state, users }
        case 'modifyTeam':
          const teams = state.teams
          teams[action.payload.team - 1] = { ...teams[action.payload.team - 1], ...action.payload.prop	}
          return { ...state, teams }
        default:
          throw new Error()
      } 
    })


    useEffect(() => {
      fetch(`http://127.0.0.1:3001/api/lobbys/${roomId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: user.username })
      })
      .then(res => res.json())
      .then(json => {
        modifyUser({ _id: json.user._id })
        dispatchLobby({ type: 'setLobby', payload: json.newLobby})
      })
      .catch(console.error)
    }, [modifyUser, roomId, user.username])

    return <GameContext.Provider value = { { lobby, dispatchLobby } }>
        { children }
    </GameContext.Provider>
}

const useGameStore = () => useContext(GameContext)

export default Provider

export { useGameStore }