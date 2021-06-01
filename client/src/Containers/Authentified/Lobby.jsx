import { useEffect, useMemo, useCallback } from 'react'

import { useUserStore } from '../../Contexts/User'
import { useGameStore } from '../../Contexts/Game'

import useSocket from '../../Hooks/useSocket'

import Container from '../../PureComponents/Authentified/Lobby/Container'
import Waitings from '../../PureComponents/Authentified/Lobby/Waitings'
import Cards from '../../PureComponents/Authentified/Lobby/Cards'
import Username from '../../PureComponents/Authentified/Lobby/Username'

import Card from '../../PureComponents/Authentified/Lobby/Card/Container'
import TeamLabel from '../../PureComponents/Authentified/Lobby/Card/TeamLabel'
import UnderBox from '../../PureComponents/Authentified/Lobby/Card/UnderBox'
import Flag from '../../PureComponents/Authentified/Lobby/Card/Flag'
import Pseudo from '../../PureComponents/Authentified/Lobby/Card/Username'
import TextInput from '../../PureComponents/Authentified/Lobby/Card/TextInput'
import JoinBtn from '../../PureComponents/Authentified/Lobby/Card/JoinBtn'

const validateLobby = (lobby) => {
    const usersNb = lobby.users.length      

    if (usersNb < 2 || usersNb > 8) return { validated: false, error: 'You can only play with 2 to 8 players'}
    
    if (lobby.users.find(user => user.team === 0)) return { validated: false, error: "There is still player that didn't choose a team"}

    return { validated: true }
}

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
        <Waitings>    
            { lobby.users.filter(user => user.team === 0).map((waitingUser, index) => <Username key = {index * 2}>{waitingUser.username}</Username>) }
        </Waitings>
        <Cards>
            {
                lobby.teams.map((team, index) => {
                    const teamNb = index + 1
                    const usersInTeam = lobby.users.filter(user => user.team === teamNb)
                    const isUserTeam = user.team === teamNb

                    return <Card>
                        { isUserTeam ? <TextInput 
                        placeholder = {team.name}
                        type = 'text' 
                        onChange = { e => { 
                            socket.emit('team:update', { name: e.target.value }, teamNb)
                            handleTeamUpdate({ name: e.target.value }, teamNb)
                        }}/> : <TeamLabel>{team.name}</TeamLabel>}
                        <UnderBox {...{isUserTeam}}>
                            <Flag/>
                            {
                                [0, 1].map(i => usersInTeam[i] ? 
                                    <Pseudo>{ usersInTeam[i].username }</Pseudo> :
                                    <JoinBtn onClick = { e => { 
                                        socket.emit('team:join', teamNb) 
                                        handleTeamJoin(user, teamNb)
                                        modifyUser({ team: teamNb }) 
                                    }}>REJOINDRE</JoinBtn>
                                )
                            }
                        </UnderBox>
                    </Card>
                })
            }
            {/* {
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
            } */}
            {

            }
        </Cards>
        {/* <PlayButton callback = {e => {
            const { validated, error } = validateLobby(lobby)
            
            if (!validated) return toast(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                type: 'error'
            })}
            
            // REDIRECT TO GAMES
            }>
        LET'S GO
        </PlayButton>
        <ToastContainer/> */}
    </Container>
}

export default Lobby