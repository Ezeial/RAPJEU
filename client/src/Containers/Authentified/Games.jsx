import { useGameStore } from '../../Contexts/Game'
import Feats from './Games/Feats'


const Games = () => {

    const { lobby } = useGameStore()

    return <>
        <Feats/>
    </>
}

export default Games

/*
    all player join the game

    a random rapper is shuffled

    first buzzer play -> 

    - (buzzed) try a rapper
    - (not buzzed) wait for response and validate

    validated ->

    - (yes) new turn with that rapper next team to play
    - (no) team loss and point go for enemy team

    next turn 
        timer start
    
    (timer = 0) team loss
    ()
*/