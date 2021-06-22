import config, { gameMode } from '../config.js'

export default class Team {
    players = []
    gameMode = gameMode.WAIT
    score = 0

    constructor(name) {
        this.name = name
    }

    isFull() {
        return this.players.length > config.maxPlayerInTeam
    }

    addPlayer(player) {
        if (this.isFull()) return console.log('Cant add a new player, max size reached :(')

        this.players.push(player)
    }

    getPlayer(name) {
        return this.players.find(player => player.name === name)
    }

    setGamemode(gamemode) {
        this.gameMode = gamemode
    }
}