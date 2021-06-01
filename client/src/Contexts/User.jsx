import React, { useCallback, useContext, useState, useMemo } from 'react'
import { useHistory } from "react-router-dom"

const UserContext = React.createContext({})

const Provider = ({ children }) => {
    const [user, setUser] = useState({ authentified: false, username: '', _id: '', team: 0})
    const history = useHistory()
    const memoizedUser = useMemo(() => user, [user])
    const memoizedModifyUser = useCallback((newProperty) => setUser(prev => ({...prev, ...newProperty})), [])

    const authorizeUser = (pseudo, roomId) => {
        const randomId = Math.random().toString(16).substring(11)

        return fetch(`http://127.0.0.1:3001/api/lobbys/${roomId || randomId}`, { method: 'GET' })
        .then(res => res.json())
        .then(json => {
            // TODO : validation server side && Token auth
            if ((!json && roomId !== '') || (json && roomId === '')) return { error: "⚠️ This lobby doesnt't exist ! ⚠️" }
            if (!pseudo) return { error: "⚠️ You must specify a pseudo ! ⚠️" }
            if (pseudo.length > 8) return { error: "⚠️ This pseudo is too long ! ⚠️" }

            if (roomId === '') fetch(`http://127.0.0.1:3001/api/lobbys/`, { 
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ roomId: randomId })
            })

            
            memoizedModifyUser({ authentified: true, username: pseudo }) 
            history.replace('')
            history.replace(`/protected/${roomId || randomId}`)
        })
        .catch(err => ({error: err}))
    }

    return <UserContext.Provider value = { { user: memoizedUser, authorizeUser, modifyUser: memoizedModifyUser } }>
        { children }
    </UserContext.Provider>
}

const useUserStore = () => useContext(UserContext)

export default Provider

export { useUserStore }