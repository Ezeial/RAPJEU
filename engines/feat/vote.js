export default class Vote {
    constructor(length) {
        this.length = length
        this.votes = []
    }
    
    vote(isPros) {
        if (this.isVoteFull()) return console.log('max vote has been reached')
        this.votes.push(isPros)
    }

    getResult() {
        let result = 0

        this.votes.forEach(vote => vote ? result++ : result--)

        return result > 0
    }

    isVoteFull() {
        return this.votes.length >= this.length
    }
} 