import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

const useSocket = (namespace, query = {}) => {
    const [socket, setSocket] = useState()

    useEffect(() => {   
        if (query.roomId && query.userId) {   
            const newSocket = io(`ws://localhost:3001/${namespace}`, { query })
            setSocket(newSocket)
            return () => newSocket.close()
        } 
    }, [namespace, query])

    return socket
}

export default useSocket