export default Object.freeze({
    maxTeamNumber: 2,
    maxPlayerInTeam: 2,
    roundNb: 5,
    scorePerRound: 15,
    rappers: ['JUL', 'FREEZE CORLEONE', 'LUV RESVAL'],
    maxPlayerInLobby: 4
})

export const gameMode = Object.freeze({
    WAIT: 'wait',
    PROPOSE: 'propose',
    VOTE: 'vote'
})

export const gameState = Object.freeze({
    PREBUZZ: 'prebuzz',
    POSTBUZZ: 'postbuzz',
    ENDED: 'ended'
})