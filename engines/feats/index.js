import Player from './user/Player.js'
import Team from './user/Team.js'
import Game from './game/Game.js'




const playerA = new Player('playerA')
const playerB = new Player('playerB')

const playerC = new Player('playerC')
const playerD = new Player('playerD')

const teamA = new Team('teamA')
const teamB = new Team('teamB')

teamA.addPlayer(playerA)
teamA.addPlayer(playerB)

teamB.addPlayer(playerC)
teamB.addPlayer(playerD)

const engine = new Game([teamA, teamB])

engine.startGame()
engine.buzz(teamA)
engine.propose(teamA, 'NINHO')
engine.addVote(teamB, playerD, false)
engine.addVote(teamB, playerD, false)
engine.buzz(teamA)
engine.propose(teamA, 'NINHO')
engine.addVote(teamB, playerD, false)
engine.addVote(teamB, playerD, false)
engine.buzz(teamA)
engine.propose(teamA, 'NINHO')
engine.addVote(teamB, playerD, false)
engine.addVote(teamB, playerD, false)
engine.buzz(teamA)
engine.propose(teamA, 'NINHO')
engine.addVote(teamB, playerD, false)
engine.addVote(teamB, playerD, false)
engine.buzz(teamA)
engine.propose(teamA, 'NINHO')
engine.addVote(teamB, playerD, false)
engine.addVote(teamB, playerD, false)
engine.buzz(teamA)
engine.propose(teamA, 'NINHO')
engine.addVote(teamB, playerD, false)
engine.addVote(teamB, playerD, false)
