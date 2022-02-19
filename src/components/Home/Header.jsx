import styled from "styled-components";
import whiteLogo from '../../assets/white-logo.png';
import Button from "../shared/Button";

const Header = ({ intersected, registerRef, howWorksRef, whoWeAreRef, faqRef }) => {
    return(
        <HeaderContainer>
            <SectionsWrapper>
                <img src={whiteLogo} alt="UP milhas logo"/>
                <SectionName isSelected = {intersected === 1} onClick = {() => {
                    registerRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Cadastro
                </SectionName>
                <SectionName isSelected = {intersected === 2} onClick = {() => {
                    howWorksRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Como Funciona
                </SectionName>
                <SectionName isSelected = {intersected === 3} onClick = {() => {
                    whoWeAreRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Quem Somos
                </SectionName>
                <SectionName isSelected = {intersected === 4} onClick = {() => {
                    faqRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Perguntas Frequentes
                </SectionName>
            </SectionsWrapper>
            <a href = "https://www.hopmilhas.com.br" target={"_blank"} rel = "noreferrer">
                <Button padding = "0.8rem 3rem">
                    Login
                </Button>
            </a>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    font-family: Roboto;
    background: #3E4E50;
    width: 100vw;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;
    z-index: 2;
    box-shadow: 2px 0px 2px 2px rgba(0, 0, 0, 0.5);

    img {
        width: 150px;
        margin-right: 20px;
    }
`;

const SectionsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SectionName = styled.p`
    cursor: pointer;
    font-weight: 300;
    font-size: 24px;
    margin: 0 25px;
    color: ${props => props.isSelected ? "#FF6B00" : "#FFFFFF"};
    transition: all .4s;

    &:hover {
        color: #FF6B00;
    }
`

export default Header;
