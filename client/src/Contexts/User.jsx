import React, { useContext, useState, useCallback } from 'react'

const UserContext = React.createContext({})

const Provider = ({ children }) => {
    const [user, setUser] = useState({ id: '', username: '', team: 0, roomId: '' })
    
    const modifyUser = (newProp) => setUser(prev => ({...prev, ...newProp }))
    const memoizedModifyUser = useCallback(modifyUser, [])

    return <UserContext.Provider value = { { user, modifyUser: memoizedModifyUser } }>
        { children }
    </UserContext.Provider>
}

const useUserStore = () => useContext(UserContext)

export default Provider

export { useUserStore }