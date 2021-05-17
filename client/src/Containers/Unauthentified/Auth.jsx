import { useParams } from 'react-router-dom'
import useInput from '../../Hooks/useInput'
import { useUserStore } from '../../Contexts/User'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Container from '../../PureComponents/Unauthentified/Auth/Container'
import Box from '../../PureComponents/Unauthentified/Auth/Box'
import TextInput from '../../PureComponents/Unauthentified/Auth/TextInput'
import Button from '../../PureComponents/Unauthentified/Auth/Button'

const Auth = () => {
    const { authorizeUser } = useUserStore()
    const { action } = useParams()
    const [pseudo, setPseudo] = useInput()
    const [code, setCode] = useInput()

    return <Container>
        <Box>
            <TextInput text = 'Pseudo' callback = {setPseudo}/>
            {action === 'join' && <TextInput text = 'Code' callback = {setCode}/>} 
            <Button callback = {e => {
                authorizeUser(pseudo, code).then(res => {
                    toast(res?.error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        type: 'error'
                    })
                })
            }}/>
        </Box>
        <ToastContainer/>
    </Container>
}

export default Auth