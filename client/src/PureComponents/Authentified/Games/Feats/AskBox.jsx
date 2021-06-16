import styled from 'styled-components'
import checkSvg from '../../../../assets/check.svg'
import crossSvg from '../../../../assets/cross.svg'
import redUser from '../../../../assets/user-red.svg'
import greenUser from '../../../../assets/user-green.svg'
import greyUser from '../../../../assets/user-grey.svg'

const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const SmallLabel = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
`

const Proposal = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight: 900;
    font-size: 4rem;
    padding: 20px 30px;
    color:white;
    border: solid 4px white;
    border-radius: 10px;
    background: #FFFFFF1F;
    margin: 15px;
`

const SvgBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width: 100%;
`

const Svg = styled.img`
    width: 30px;
    cursor:pointer;
`



const AskBox = () => <Box>
    <SmallLabel><span style = {{color: 'black', fontSize: 'inherit'}}>Mathieu</span> propose :</SmallLabel>
    <Proposal>
        DIAMS 
    </Proposal>
    {/* <SvgBox>
        <Svg src = {crossSvg}/>
        <Svg src = {checkSvg}/>
    </SvgBox> */}
    <SvgBox>
        <Svg src = {redUser}></Svg>
        <Svg src = {greenUser}></Svg>
        <Svg src = {greenUser}></Svg>
        <Svg src = {redUser}></Svg>
        <Svg src = {greyUser}></Svg>
    </SvgBox>
</Box>

export default AskBox