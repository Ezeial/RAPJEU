import User from './user.js'

/*
    GAMEMODE

    0 -> waitForBuzz
    1 -> propose
    2 -> wait
    3 -> vote

*/


export default class Team {
    constructor(users, name) {
        this.users = users.map(user => new User(user))
        this.name = name
        this.score = 0
        this.gamemode = 0
    }

    setGamemode(newGamemode) {
        this.gamemode = newGamemode
    }
}