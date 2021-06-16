import Container from '../../../PureComponents/Authentified/Games/Feats/Container'
import GameTitle from '../../../PureComponents/Authentified/Games/GameTitle'
import DisplayBox from '../../../PureComponents/Authentified/Games/DisplayBox'
import AskBox from '../../../PureComponents/Authentified/Games/Feats/AskBox'
import ResponseBox from '../../../PureComponents/Authentified/Games/ResponseBox'
import Timer from '../../../PureComponents/Authentified/Games/Timer'

const Feats = () => {
    return <Container>  
        <Timer/>
        <GameTitle>Rolland Gamos</GameTitle>
        <DisplayBox  hint = 'test hint:'>
            Lorem ipsum 
        </DisplayBox>
        <AskBox/>
        <ResponseBox/>
    </Container>
}

export default Feats