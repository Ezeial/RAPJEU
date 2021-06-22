import config from '../config.js'
import Team from './Team.js'

export default class Lobby {
    teams = [new Team(), new Team()]
    players = []
    maxPlayer = config.maxPlayerInLobby

    isFull() {
        return this.players.length >= this.maxPlayer
    }

    joinLobby(player) {
        if (this.isFull()) return console.error('cant join, lobby full')

        this.players.push(player)
    }

    joinTeam(player, teamNb) {
        if (teamNb < 0 || 2 < teamNb) return console.log('this team doesnt exist')

        player.team = teamNb
    }

    renameTeam(player, newName) {
        if (player.team < 1 || this.teams.length < player.team) return console.log('this player isnt in a team')
        this.teams[player.team - 1].name = newName
    }

    validateLobby() {
        if (this.players.find(player => player.team === 0)) return { error: 'still player that didnt join team' }
        if (this.teams.find(team => team.name === '')) return { error: 'there is still team with no name' }

        this.players.forEach(player => this.teams[player.team - 1].addPlayer(player))

        return this.teams
    }
}