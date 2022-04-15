import styled from "styled-components";
import whiteLogo from '../../assets/white-logo.png';
import Button from "../shared/Button";

const Header = ({ intersected, registerRef, howWorksRef, whoWeAreRef, faqRef, headerShown, setHeaderShown}) => {    
    return(
        <HeaderContainer headerShown = {headerShown} onMouseOver = {() => setHeaderShown(true)}>
            <SectionsWrapper>
                <img src={whiteLogo} alt="UP milhas logo"/>
                <SectionName isSelected = {intersected === 1} onClick = {() => {
                    registerRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }} headerShown = {headerShown}>
                    Cadastro
                </SectionName>
                <SectionName isSelected = {intersected === 2} onClick = {() => {
                    howWorksRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }} headerShown = {headerShown}>
                    Como Funciona
                </SectionName>
                <SectionName isSelected = {intersected === 4} onClick = {() => {
                    faqRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }} headerShown = {headerShown}>
                    Perguntas Frequentes
                </SectionName>
                <SectionName isSelected = {intersected === 3} onClick = {() => {
                    whoWeAreRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }} headerShown = {headerShown}>
                    Quem Somos
                </SectionName>
            </SectionsWrapper>
            <SectionsWrapper>
                <a href = "https://portalupmilhas.com/login" target={"_blank"} rel = "noreferrer">
                    <Button padding = "0.8rem 1.6rem" paddingMobile = "0.6rem .8rem">
                        Acesso ao sistema
                    </Button>
                </a>
                <a href = "https://portalupmilhas.com/Cadastro" target={"_blank"} rel = "noreferrer">
                    <Button padding = "0.8rem 1.6rem" paddingMobile = "0.6rem .8rem" color="white">
                        Cadastrar-se
                    </Button>
                </a>
            </SectionsWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    font-family: Roboto;
    background: ${props => props.headerShown ?  "#2C74A3" : "transparent"};
    width: 100vw;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    z-index: 2;
    box-shadow: ${props => props.headerShown ? "2px 0px 2px 2px rgba(0, 0, 0, 0.5)" : "none"};
    transition: all .4s;
    a {
        text-decoration: none;
    }

    img {
        width: 150px;
        margin-right: 20px;
    }

    @media (max-width: 1000px) {
        height: 90px;
        padding: 0px 15px 0px 10px;

        img{
            width: 100px;
        }
    }
`;

const SectionsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SectionName = styled.h3`
    cursor: pointer;
    text-align: center;
    font-weight: 300;
    font-size: 24px;
    margin: 0 25px;
    color: ${props => props.isSelected ? "#3A98D5" : "#FFFFFF"};
    transition: all .4s;

    &:hover {
        color: #173D57;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`

export default Header;
