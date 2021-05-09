import Container from '../../../PureComponents/Lobby/Body/Auth/Container'

import Box from '../../../PureComponents/Lobby/Body/Auth/Box'
import TextInput from '../../../PureComponents/Lobby/Body/Auth/TextInput'
import Button from '../../../PureComponents/Lobby/Body/Auth/Button'

import { useParams } from 'react-router-dom'
import Link from '../../../LogicalComponents/MyLink'

import { useUserStore } from '../../../Contexts/User'
import { useState } from 'react'

const Auth = () => {
    const { action } = useParams()
    const { modifyUser } = useUserStore()
    const [roomId, setRoomId] = useState('')

    return <Container>
        <Box>
            <TextInput callback = {e => modifyUser({ username: e.target.value })} text = 'Pseudo'/>
            {action === 'join' && <TextInput callback = {e => setRoomId(e.target.value)} text = 'Code'/>} 
            <Link to = {`/lobby/${roomId}`}>
                <Button/>
            </Link>
        </Box>
    </Container>
}

export default Auth 