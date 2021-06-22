import Player from './auth/Player.js'
import Lobby from './lobby/Lobby.js'
import Game from './feats/Game.js'



const playerA = new Player('playerA')
const playerB = new Player('playerB')

const playerC = new Player('playerC')
const playerD = new Player('playerD')

const lobby = new Lobby()

lobby.joinLobby(playerA)
lobby.joinLobby(playerB)
lobby.joinLobby(playerC)
lobby.joinLobby(playerD)

lobby.joinTeam(playerA, 1)
lobby.joinTeam(playerB, 1)
lobby.joinTeam(playerC, 2)
lobby.joinTeam(playerD, 2)

lobby.renameTeam(playerA, 'teamA')
lobby.renameTeam(playerC, 'teamB')

const teams = lobby.validateLobby()

if (!teams.error) {
    const game = new Game(teams)
    console.log(game)
} else console.log(teams.error)
