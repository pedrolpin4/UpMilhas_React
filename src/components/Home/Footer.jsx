import styled from "styled-components"

const Footer = () => {
    return(
        <FooterContainer>
            <PageGuide>
                <h3>
                    Mapa da Página
                </h3>
                <p>
                    Cadastro
                </p>
                <p>
                    Como Funciona
                </p>
                <p>
                    Quem Somos
                </p>
                <p>
                    Perguntas Frequentes
                </p>
            </PageGuide>
            <Contacts>
                <h3>
                    Contatos
                </h3>
                <p>
                    WhatsApp
                </p>
                <p> 
                    Email
                </p>
                <p>
                    Instagram
                </p>
            </Contacts>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    padding: 30px;
    width: 100vw;
    height: 366px;
    background: #3E4E50;
`;

const PageGuide = styled.footer`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;

const Contacts = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
`;
