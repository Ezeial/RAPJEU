import React, { useContext, useState } from 'react'

const UserContext = React.createContext({})

const Provider = ({ children }) => {
    const [user, setUser] = useState({ id: '', username: 'jean-michel-front', team: 0, roomId: '' })
    
    const modifyUser = (newProp) => {
        setUser(prev => ({...prev, ...newProp }))
    }

    return <UserContext.Provider value = { { user, modifyUser } }>
        { children }
    </UserContext.Provider>
}

const useUserStore = () => useContext(UserContext)

export default Provider

export { useUserStore }