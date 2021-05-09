import { useEffect } from 'react'
import { useUserStore } from '../Contexts/User'

const postLobby = async (username) => {
    console.log('post');
    const res = await fetch('http://127.0.0.1:3001/api/lobbys', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ username }),
    })
    return res.json()
}

const putLobby = async (username, id) => {
    const res = await fetch(`http://127.0.0.1:3001/api/lobbys/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ username }),
    })
    return res.json()
}

const useFetchLobby = (id) => {
    const { user, modifyUser } = useUserStore()
    useEffect(() => { 
        (async () => {
            if (!user.username) return
            try { 
                if (!id) {
                    const res = await postLobby(user.username)
                    modifyUser({ id: res.user._id, roomId: res.roomId })
                    return
                } 
                const res = await putLobby(user.username, id)
                modifyUser({ id: res._id, roomId: id })
            } catch (err) {
                console.error(err)
            }
        })()
    }, [id, user.username, modifyUser])
}

export default useFetchLobby