import Container from '../../../PureComponents/Authentified/Lobby/Card/Container'
import TeamLabel from '../../../PureComponents/Authentified/Lobby/Card/TeamLabel'
import UnderBox from '../../../PureComponents/Authentified/Lobby/Card/UnderBox'
import Flag from '../../../PureComponents/Authentified/Lobby/Card/Flag'
import Username from '../../../PureComponents/Authentified/Lobby/Card/Username'
import TextInput from '../../../PureComponents/Authentified/Lobby/Card/TextInput'

const Card = ({ a }) => {
    return <Container>
        { a ? <TextInput type = 'text'/> : <TeamLabel ></TeamLabel> }
        <UnderBox a = {a}>
            <Flag/>
            <Username>
                s/o dgk Le muezin
            </Username>
            <Username>
                Le muezin
            </Username>
        </UnderBox>
    </Container>
}

export default Card