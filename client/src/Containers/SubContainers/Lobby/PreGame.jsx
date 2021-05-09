import { useParams } from 'react-router-dom'
// import { useUserStore } from '../../../Contexts/User'

import useFetchLobby from '../../../Hooks/useFetchLobby'

import Container from '../../../PureComponents/Lobby/Body/PreGame/Container'
import Waitings from '../../../PureComponents/Lobby/Body/PreGame/Waitings'
import Username from '../../../PureComponents/Lobby/Body/PreGame/Username'
import HorizontalBar from '../../../PureComponents/Lobby/Body/PreGame/HorizontalBar'
import Cards from '../../../PureComponents/Lobby/Body/PreGame/Cards'
import UpperCard from '../../../PureComponents/Lobby/Body/PreGame/UpperCard'
import Card from '../../../PureComponents/Lobby/Body/PreGame/Card'
import Flag from '../../../PureComponents/Lobby/Body/PreGame/Flag'
import Teams from '../../../PureComponents/Lobby/Body/PreGame/Teams'
import TextInput from '../../../PureComponents/Lobby/Body/PreGame/TextInput'
import JoinBtn from '../../../PureComponents/Lobby/Body/PreGame/JoinBtn'

const PreGame = () => {
    const { id } = useParams()
    // const { user } = useUserStore()

    useFetchLobby(id)

    return <Container>
        <Waitings>
            {
                ['JACKO', 'JANNOT', 'THELAPIN KILLEUR DU 7'].map(el => <Username>{el}</Username>)
            }
        </Waitings>
            <HorizontalBar/>
        <Cards>
            <Card>
                <UpperCard>
                    <Flag/>
                    <Teams>
                        <JoinBtn/>
                        <JoinBtn/>
                    </Teams>
                </UpperCard>
                <TextInput text = "Nom de l'équipe"/>
            </Card>
            <Card>
                <UpperCard>
                    <Flag/>
                    <Teams>
                        <Username>Test</Username>
                        <Username>Test</Username>
                    </Teams>
                </UpperCard>
                <TextInput text = "Nom de l'équipe"/>
            </Card>
            <Card>
                <UpperCard>
                    <Flag/>
                    <Teams>
                        <Username>Test</Username>
                        <Username>Test</Username>
                    </Teams>
                </UpperCard>
                <TextInput text = "Nom de l'équipe"/>
            </Card>
            <Card>
                <UpperCard>
                    <Flag/>
                    <Teams>
                        <Username>Test</Username>
                        <Username>Test</Username>
                    </Teams>
                </UpperCard>
                <TextInput text = "Nom de l'équipe"/>
            </Card>
        </Cards>
    </Container>
}

export default PreGame 