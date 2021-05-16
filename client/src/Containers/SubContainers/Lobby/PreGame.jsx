import { useEffect, useMemo } from 'react'
import useSocket from '../../../Hooks/useSocket'
import { useParams } from 'react-router-dom'
import { useGameStore } from '../../../Contexts/Game'

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
import TeamName from '../../../PureComponents/Lobby/Body/PreGame/TeamName'

const PreGame = () => {
    const { lobby, user, dispatchLobby, modifyUser } = useGameStore()
    const id = useParams()
    const memoizedQuery = useMemo(() => ({ roomId: id, userId: user._id}), [id, user._id])
    const socket = useSocket('lobby', memoizedQuery)

    useEffect(() => {
        if (!socket) return
    }, [socket])

    if (Object.keys(lobby || user).length === 0 ) return <></>
    
    return <Container>
        <Waitings>
            {
                lobby.users.filter(u => u.team === 0).map((u, i) => <Username key = {i}>{u.username}</Username>)
            }
        </Waitings>
            <HorizontalBar/>
        <Cards>
            {
                lobby.teams.map((team, i) => {
                    const teamIdx = i + 1
                    const users = lobby.users.filter(u => u.team === teamIdx)

                    return <Card key = {i}>
                        <UpperCard>
                            <Flag/>
                            <Teams>
                                { users[0] ? 
                                <Username>{users[0].username}</Username> : 
                                <JoinBtn callback = {e => {
                                    dispatchLobby({ type: 'users', payload: { username:user.username, newTeam: teamIdx }})
                                    modifyUser({ team: teamIdx})
                                    }}/>}
                                { users[1] ? 
                                <Username>{users[1].username}</Username> : 
                                <JoinBtn callback = {e => {
                                    dispatchLobby({ type: 'users', payload: { username:user.username, newTeam: teamIdx }})
                                    modifyUser({ team: teamIdx})
                                    }}/>}
                            </Teams>
                        </UpperCard>
                        { user.team === teamIdx ? 
                        <TextInput 
                        text = "Nom de l'équipe" 
                        callback = {e => dispatchLobby({ type: 'teams', payload: { teamNb: teamIdx, name: e.target.value }})}/> : 
                        <TeamName text = "Nom de l'équipe" name = {team.name}/> }
                        </Card>
                    })
            }
        </Cards>
    </Container>
}

export default PreGame 