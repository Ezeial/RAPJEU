import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"

const UserContext = React.createContext({})

const Provider = ({ children }) => {
    const [user, setUser] = useState({ authentified: false, username: '', id: '', team: ''})
    const history = useHistory()

    const modifyUser = (newProperty) => setUser(prev => ({...prev, ...newProperty}))

    const authorizeUser = (pseudo, roomId) => {
        const randomId = Math.random().toString(16).substring(11)

        return fetch(`http://127.0.0.1:3001/api/lobbys/${roomId || randomId}`, { method: 'GET' })
        .then(res => res.json())
        .then(json => {
            // TODO : validation server side && Token
            if ((!json && roomId !== '') || (json && roomId === '')) return { error: "⚠️ This lobby doesnt't exist ! ⚠️" }
            if (!pseudo) return { error: "⚠️ You must specify a pseudo ! ⚠️" }

            if (roomId === '') fetch(`http://127.0.0.1:3001/api/lobbys/`, { 
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ roomId: randomId })
            })

            
            modifyUser({ authentified: true, username: pseudo }) 
            history.replace('')
            history.replace(`/protected/${randomId}`)
        })
        .catch(err => ({error: err}))
    }

    return <UserContext.Provider value = { { user, authorizeUser } }>
        { children }
    </UserContext.Provider>
}

const useUserStore = () => useContext(UserContext)

export default Provider

export { useUserStore }