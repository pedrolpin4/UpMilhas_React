import styled from "styled-components";
import whiteLogo from '../assets/white-logo.png';

const Header = ({ intersected, setIntersected }) => {
    return(
        <HeaderContainer>
            <SectionsWrapper>
                <img src={whiteLogo} alt="UP milhas logo"/>
                <SectionName isSelected = {intersected === 1} onClick = {() => setIntersected(1)}>
                    Cadastro
                </SectionName>
                <SectionName isSelected = {intersected === 2} onClick = {() => setIntersected(2)}>
                    Como Funciona
                </SectionName>
                <SectionName isSelected = {intersected === 3} onClick = {() => setIntersected(3)}>
                    Quem Somos
                </SectionName>
                <SectionName isSelected = {intersected === 4} onClick = {() => setIntersected(4)}>
                    Perguntas Frequentes
                </SectionName>
            </SectionsWrapper>
            <LoginButton href = "https://www.hopmilhas.com.br" target={"_blank"} rel = "noreferrer">
                Login
            </LoginButton>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    font-family: Roboto;
    background: #3E4E50;
    width: 100vw;
    height: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 40px;

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

const LoginButton = styled.a`
    cursor: pointer;
    position: relative;
    backface-visibility: hidden;
    text-decoration: none;
    display: inline-block;
    font-weight: 300;
    background-color: #FF6B00;
    color: #fff;
    padding: 0.8rem 2.4rem;
    border-radius: 3rem;
    font-size: 1.3rem;
    transition: all .2s;
    border: none;
    cursor: pointer; 

    &:hover{
        transform: translateY(-0.3rem);
        box-shadow: 0 1rem 2rem rgba(0,0,0, .2);
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active{
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0, .2);
    }

    &::after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 3rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .4s;
        background-color: #FF6B00;
        z-index: -1;
    }
`

export default Header;
