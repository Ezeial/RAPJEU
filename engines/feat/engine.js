import Team from './team.js'
import Round from './round.js'
import Vote from './vote.js'

class Engine {
    constructor(teams, round, scorePerRound, rappers) {
        this.teams = teams.map(({ users, name }) => new Team(users, name))
        this.round = new Round (round)
        this.scorePerRound = scorePerRound
        this.rappers = rappers

        this.currentRapper = ''
        this.currentVote = undefined
        this.gamestate = 0  
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    nextRound() {
        if(!this.round.triggerNextRound()) return console.log('game ended')

        console.log(`round ${this.round.currentRound} start`)

        this.gamestate = 0
        this.teams.forEach(team => team.setGamemode(0))
        this.currentRapper = this.rappers[this.getRandomNumber(0, this.rappers.length - 1)]

        console.log(`the first rapper for this round is ${this.currentRapper}`)
    }

    buzz(teamIdx) {
        if (!this.checkGamemode(teamIdx, 0)) return console.log('this team cant buzz')

        console.log(`team ${teamIdx} buzzed`)

        this.teams.forEach((team, i) => i === teamIdx ? team.setGamemode(1) : team.setGamemode(2))
    }

    propose(teamIdx, rapper) {
        if (!this.checkGamemode(teamIdx, 1)) return console.log('this team cant propose a rapper')

        console.log(`team: ${teamIdx} propose ${rapper}`)

        this.currentRapper = rapper

        console.log(`new current rapper: ${this.currentRapper}`)

        this.teams.forEach((team, i) => i === teamIdx ? team.setGamemode(2) : team.setGamemode(3))

        let voteLength = 0
        this.teams.filter(team => team.gamemode === 3).forEach(team => voteLength += team.users.length)
        this.startVote(voteLength)
    }

    startVote(voteLength) {
        console.log('a new vote has started')
        this.currentVote = new Vote(voteLength)
    }

    vote(teamIdx, vote) {
        if (!this.checkGamemode(teamIdx, 3)) return console.log('this team cant vote')
        console.log(`team ${teamIdx} vote ${vote ? 'pro' : 'con'}`)
        this.currentVote.vote(vote)
        
        if (this.currentVote.isVoteFull()) return this.parseVoteResult()
    }

    parseVoteResult() {
        if(this.currentVote.getResult()) return this.teams.forEach((team, i) => {
            if (team.gamemode === 3) {
                team.gamemode = 1
                console.log(`now its team ${i} turn to propose a rapper name`)
            }
        })
        this.teams.find(team => team.gamemode === 3).score += this.scorePerRound
        this.nextRound()
    }

    checkGamemode(teamIdx, gamemode) {
        return this.teams[teamIdx].gamemode === gamemode
    }
}

const teams = [{ name: 'A team', users: ['A1u', 'A2u'] }, { name: 'B team', users: ['B1u', 'B2u'] }]
const rappers = ['JUL', 'FREEZE CORLEONE', 'LUV RESVAL']

const engine = new Engine (teams, 5, 10, rappers)

engine.nextRound()
engine.buzz(0)
engine.propose(0, 'ZGEG')
engine.vote(1, false)
engine.vote(1, true)

