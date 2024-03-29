import styled from "styled-components"
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const Footer = ({ encripted, registerRef, howWorksRef, whoWeAreRef, faqRef}) => {
    return(
        <FooterContainer>
            <PageGuide>
                <h3>
                    Mapa da Página
                </h3>
                <p onClick = {() => {
                    registerRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Cadastro
                </p>
                <p onClick = {() => {
                    howWorksRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Como Funciona
                </p>
                <p onClick = {() => {
                    whoWeAreRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Quem Somos
                </p>
                <p onClick = {() => {
                    faqRef.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
                }}>
                    Perguntas Frequentes
                </p>
            </PageGuide>
            <GoogleMap>
                <iframe 
                    title = "map" 
                    jsname="L5Fo6c" 
                    className="YMEQtf" 
                    sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads allow-modals" 
                    frameBorder="0" 
                    aria-label="Map, R. José Getúlio - Liberdade" src="https://maps-api-ssl.google.com/maps?hl=en-US&amp;ll=-23.568436,-46.634658&amp;output=embed&amp;q=R.+Jos%C3%A9+Get%C3%BAlio+-+Liberdade,+S%C3%A3o+Paulo+-+SP,+Brazil+(R.+Jos%C3%A9+Get%C3%BAlio+-+Liberdade)&amp;z=17" 
                    allowFullScreen="" 
                />
            </GoogleMap>
            <Infos>
                <h3>
                    Informações
                </h3>
                <div>
                    <p>Telefone: (11) 94649-0400</p>
                </div>
                <div>
                    <p>Email: upmilhascontato@gmail.com</p>
                </div>
                <div>
                    <p>Endereço: R. José Getúlio - Liberdade São Paulo - SP</p>
                </div>
                <p>Horário de Atendimento: Todos os dias de 09h às 22h (Horário de Brasília)</p>
            </Infos>
            <Contacts>
                <h3>
                    Contatos
                </h3>
                <a href={`https://api.whatsapp.com/send?phone=5511946490400&text=${encripted}.`} target={"_blank"} rel = "noreferrer">
                   <BsWhatsapp size = {50}/>
                </a>
                <a href = "https://www.instagram.com/upmilhasaereas" target={"_blank"} rel = "noreferrer">
                    <BsInstagram size = {50} />
                </a>
                <a href = "https://www.hopmilhas.com.br" target={"_blank"} rel = "noreferrer">
                    <GoMail size = {60} />
                </a>
            </Contacts>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    font-family: Roboto;
    display: flex;
    justify-content: center;
    padding: 30px;
    width: 100vw;
    background: #2C74A3;

    @media(max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`;

const GoogleMap = styled.div`
    position: relative;
    display: flex;
    width: 30vw;
    overflow: hidden;
    border-radius: 10px;
    margin-right: 5vw;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media(max-width: 1000px) {
        width: 65vw;
        height: 400px;
        margin: 75px 0 75px 0;
    }

    @media(max-width: 600px) {
        width: 90vw;
        height: 300px;
        margin: 75px 0 75px 0;
    }
`

const PageGuide = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin-right: 7vw;

    h3 {
        margin-bottom: 25px;
        font-size: 2rem;
        font-weight: 300;
        color: #3AedFF;
    }

    p {
        cursor: pointer;
        font-weight: 300;
        font-size: 1.6rem;
        margin-bottom: 15px;
        line-height: 37px;
        color: #FFFEFE;
        transition: all .4s;

        &:hover {
            color: #3AedFF;
        }
    }

    @media(max-width: 1000px) {
        align-items: center;
        width: 90vw;
        margin: 0;
    }
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;

    h3 {
        margin-bottom: 25px;
        font-size: 2rem;
        font-weight: 300;
        color: #3AedFF;
    }

    div {
        display: flex;
        width: 20vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(180, 180, 180, 0.7)
    }

    p {
        text-decoration: none;
        text-align: center;
        font-weight: 300;
        width: 90%;
        font-size: 1rem;
        margin-bottom: 15px;
        line-height: 37px;
        color: #FFFEFE;
        transition: all .4s;

        &:hover {
            color: #3AedFF;
        }
    }

    @media(max-width: 1000px) {
        width: 90vw;
        margin: 0 0 50px 0;

        div {
            width: 80vw;
        }
    }
`;

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;

    h3 {
        margin-bottom: 25px;
        font-size: 2rem;
        font-weight: 300;
        color: #3AedFF;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        font-weight: 300;
        font-size: 1.6rem;
        margin-bottom: 15px;
        line-height: 37px;
        color: #FFFEFE;
        transition: all .4s;

        &:hover {
            color: #3AedFF;
        }
    }

    @media(max-width: 1000px) {
        width: 90vw;
        margin: 0;
    }
`;
