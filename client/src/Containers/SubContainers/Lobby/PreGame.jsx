import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUserStore } from '../../../Contexts/User'

const postLobby = async (username) => {
    const res = await fetch('http://127.0.0.1:3001/api/lobbys', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ username }),
    })
    return await res.json()
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
    return await res.json()
}

const PreGame = () => {
    const { id } = useParams()
    const { user, modifyUser } = useUserStore()

    useEffect(async () => {
        try {
            if (!id) {
                const res = await postLobby(user.username)
                return console.log(res)
            }
            const res = await putLobby(user.username, id)
            return console.log(res)
        } catch (err) {
            console.error(err)
        }
    }, [])

    return <div>
        user : 
        zgeg :
    </div>
}

export default PreGame