export default class Vote {
    votes = []
    
    constructor(team) {
        this.team = team
        this.length = team.players.length
    }
    
    add(vote) {
        this.votes.push(vote)
    }

    getResult() {
        let result = 0

        this.votes.forEach(vote => vote ? result++ : result--)

        return result > 0
    }

    isFull() {
        return this.votes.length >= this.length
    }
} 