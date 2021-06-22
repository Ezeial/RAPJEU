import { gameMode } from '../config.js'

export default class Team {
    gameMode = gameMode.WAIT
    score = 0
    name = ''
    players = []

    setGamemode(gamemode) {
        this.gameMode = gamemode
    }

    addPlayer(player) {
        this.players.push(player)
    }
}