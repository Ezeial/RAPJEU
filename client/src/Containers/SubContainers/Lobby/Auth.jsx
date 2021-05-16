import Container from '../../../PureComponents/Lobby/Body/Auth/Container'

import Box from '../../../PureComponents/Lobby/Body/Auth/Box'
import TextInput from '../../../PureComponents/Lobby/Body/Auth/TextInput'
import Button from '../../../PureComponents/Lobby/Body/Auth/Button'

import { useParams, useHistory } from 'react-router-dom'

import { useGameStore } from '../../../Contexts/Game'
import { useState } from 'react'

const Auth = () => {
    const [inputInfos, setInputInfos] = useState({ username: '', roomId: ''})
    const { action } = useParams()
    const { fetchLobby } = useGameStore()
    const history = useHistory()

    const handleClick = async () => {
        if (action === 'create') {
            fetchLobby(inputInfos.username, 'POST')
            .then((json) => {
                history.replace('')
                history.replace(`lobby/${json.newLobby.roomId}`)
            })
            return
        }
        fetchLobby(inputInfos.username, 'PUT', inputInfos.roomId)
        .then((json) => {
            history.replace('')
            history.replace(`lobby/${json.newLobby.roomId}`)
        }).catch(err => console.error(err))
    }

    return <Container>
        <Box>
            <TextInput text = 'Pseudo' callback = {e => setInputInfos(prev => ({...prev, username: e.target.value}))}/>
            {action === 'join' && <TextInput callback = {e => setInputInfos(prev => ({...prev, roomId: e.target.value}))} text = 'Code'/>} 
            <Button callback = {e => handleClick()}/>
        </Box>
    </Container>
}

export default Auth 