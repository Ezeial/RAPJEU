import config, { gameMode, gameState } from '../config.js'
import Round from './Round.js'
import Vote from './Vote.js'

export default class Game { 
    gameState = gameState.PREBUZZ
    round = new Round(config.roundNb)
    scorePerRound = config.scorePerRound
    current = ''

    constructor(teams) {
        this.teams = teams
    }

    shuffleNewRapper() {
        const getRandomNumber = (max) => {
            return Math.floor(Math.random() * max)
        }

        this.current = config.rappers[getRandomNumber(config.rappers.length)]
    }

    startGame() {
        this.score = 0
        this.gameState = gameState.PREBUZZ
        this.round = new Round(config.roundNb)
        this.teams.forEach(team => team.gameMode = gameMode.WAIT)
        this.shuffleNewRapper()

        console.log('game start')
        console.log(`the first rapper for this round is ${this.current}`)

        this.round.triggerNextRound()
    }

    buzz(team) {
        if (this.gameState !== gameState.PREBUZZ) return console.error('Cant buzz, not the good gamestate')
        if (team.gameMode !== gameMode.WAIT) return console.error('this team cant buzz')

        console.log(`team ${team.name} has buzzed !`)

        this.gameState = gameState.POSTBUZZ
        this.teams.forEach(t => t.setGamemode(t.name === team.name ? gameMode.PROPOSE : gameMode.WAIT)) // tips by sukaato
    }

    propose(team, rapper) {
        if (team.gameMode !== gameMode.PROPOSE) return console.log('This player cant propose')

        this.teams.forEach(t => t.setGamemode(t.name === team.name ? gameMode.WAIT : gameMode.VOTE))
        this.current = rapper

        console.log(`team ${team.name} proposed the rapper ${rapper}`)

        this.startVote(this.teams.find(t => t.name !== team.name))
    }
    
    startVote(team) {
        console.log('a vote start')
        this.vote = new Vote(team)
    }

    addVote(team, player, vote) {
        if (team.gameMode !== gameMode.VOTE || !team.players.includes(player)) return console.log('This player cant vote')

        console.log(`${player.name} vote ${vote ? 'for' : 'con'}`)

        this.vote.add(vote)

        if(this.vote.isFull()) this.parseVoteResult()
    }

    parseVoteResult() {
        if (!this.vote.getResult()) {
            this.vote.team.score += this.scorePerRound
            console.log(`team ${this.vote.team.name} won this round, new score for them : ${this.vote.team.score}`)
            return this.nextRound()
        }
        this.teams.forEach(t => t.name === this.vote.team.name ? t.setGamemode(gameMode.PROPOSE) : t.setGamemode(gameMode.WAIT))
        console.log(`now its team ${this.vote.team.name} to guess a new feat with ${this.current}`)
    }

    nextRound() {
        this.teams.forEach(t => t.setGamemode(gameMode.WAIT))

        if(!this.round.triggerNextRound()) return this.gameState = gameState.ENDED

        this.gameState = gameState.PREBUZZ  
        this.shuffleNewRapper()

        console.log(`the first rapper for this round is ${this.current}`)
    }
}
