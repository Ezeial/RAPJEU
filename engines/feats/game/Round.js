export default class Round {
    current = 0

    constructor(roundNb) {    
        this.max = roundNb
    }

    triggerNextRound() {
        if (this.isGameEnded()) return false
        this.current++
        console.log(`round number [${this.current}] start !`)
        return true
    }

    isGameEnded() {
        return this.current >= this.max
    }
}