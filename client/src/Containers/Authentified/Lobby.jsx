import { useEffect, useMemo, useCallback } from 'react'

import { useUserStore } from '../../Contexts/User'
import { useGameStore } from '../../Contexts/Game'

import useSocket from '../../Hooks/useSocket'

import Container from '../../PureComponents/Authentified/Lobby/Container'
import LeftContainer from '../../PureComponents/Authentified/Lobby/LeftContainer'
import Waitings from '../../PureComponents/Authentified/Lobby/Waitings'
import Username from '../../PureComponents/Authentified/Lobby/Username'
import HorizontalBar from '../../PureComponents/Authentified/Lobby/HorizontalBar'
import Cards from '../../PureComponents/Authentified/Lobby/Cards'
import Card from '../../PureComponents/Authentified/Lobby/Card'
import UpperCard from '../../PureComponents/Authentified/Lobby/UpperCard'
import Flag from '../../PureComponents/Authentified/Lobby/Flag'
import Teams from '../../PureComponents/Authentified/Lobby/Teams'
import TextInput from '../../PureComponents/Authentified/Lobby/TextInput'
import JoinBtn from '../../PureComponents/Authentified/Lobby/JoinBtn'
import TeamName from '../../PureComponents/Authentified/Lobby/TeamName'
import PlayButton from '../../PureComponents/Authentified/Lobby/PlayButton'

const Lobby = () => {
    // Hooks
    const { user, modifyUser } = useUserStore()
    const { lobby, dispatchLobby } = useGameStore()
    const memoizedQuery = useMemo(() => ({ roomId: lobby?.roomId, userId: user._id }), [lobby?.roomId, user._id])
    const socket = useSocket('lobby', memoizedQuery)

    const handleTeamJoin = useCallback((user, team) => dispatchLobby({ type: 'setUserTeam', payload: { team, user }}), [dispatchLobby])
    
    const handleTeamUpdate = useCallback((prop, team) => dispatchLobby({ type: 'modifyTeam', payload: { team, prop } }), [dispatchLobby])

    useEffect(() => {
        if (socket) {
            socket.emit('lobby:join', user)

            socket.on('lobby:join', (user) => dispatchLobby({ type: 'pushUser', payload: user})) 

            socket.on('team:join', handleTeamJoin)
            socket.on('team:update', handleTeamUpdate)
        }
    }, [socket, dispatchLobby, handleTeamJoin, handleTeamUpdate])

    // UI

    if (!lobby) return <>loading</>

    return <Container>
    <LeftContainer>
        <Waitings>    
            { lobby.users.filter(user => user.team === 0).map((waitingUser, index) => <Username key = {index * 2}>{waitingUser.username}</Username>) }
        </Waitings>
        <HorizontalBar/>
        <Cards>
            {
                lobby.teams.map((team, index) => {
                    const teamNb = index + 1
                    const users = lobby.users.filter(user => user.team === teamNb)

                    return <Card key = {index * 2 + 1}>
                        <UpperCard>
                            <Flag callback = {e => {
                                // TODO : REAL SYSTEM OF IMG CHOICES
                                socket.emit('team:update', { img: 'NEWIMAGE' }, index)
                                handleTeamUpdate({ img: 'NEWIMAGE' }, teamNb)
                            }}/>
                            <Teams>
                                { 
                                    [0, 1].map(idx => users[idx] ? 
                                    <Username key = { 57 * idx}>{users[idx].username}</Username> : 
                                    <JoinBtn key = { 58 * idx} callback = { e => { 
                                        socket.emit('team:join', teamNb) 
                                        handleTeamJoin(user, teamNb)
                                        modifyUser({ team: teamNb }) 
                                    }}/>) 
                                }
                            </Teams>
                        </UpperCard>
                        { 
                            user.team === teamNb ? 
                            <TextInput placeholder = {team.name} text = "nom de l'équipe" callback = { e => { 
                                socket.emit('team:update', { name: e.target.value }, teamNb)
                                handleTeamUpdate({ name: e.target.value }, teamNb)
                            }}/> : 
                            <TeamName text = "nom de l'équipe">{team.name}</TeamName>
                        }
                    </Card>
                })
            }
        </Cards>
    </LeftContainer>
    <PlayButton callback = {e => console.log('PLAY')}>LET'S GO</PlayButton>
    </Container>
}

export default Lobby