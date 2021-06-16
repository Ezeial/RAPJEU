export default class Round {
    constructor(maxRound) {
        this.maxRound = maxRound
        this.currentRound = 0
    }

    triggerNextRound() {
        if (this.isGameEnded()) return false
        this.currentRound++
        return true
    }

    isGameEnded() {
        return this.currentRound >= this.maxRound
    }
}