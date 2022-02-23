import { useEffect } from "react";
import styled from "styled-components";
import { BsWhatsapp} from 'react-icons/bs'

const WhoWeAre = ({ whoWeAreRef, setIntersected, setHeaderShown}) => {
    
    useEffect(() => {
        const observationOptions = {
            rootMargin: "0px 0px -108px 0px",
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIntersected(3)
            } else{
                setIntersected(prev => prev)
            }

        }, observationOptions)

        if(whoWeAreRef.current){
            headerObserver.observe(whoWeAreRef.current)
        }
    }, [whoWeAreRef, setIntersected, setHeaderShown]);

    return(
        <WhoWeAreContainer ref={whoWeAreRef}>
            <WhoWeAreTitle>
                Sobre a <span>UP Milhas</span>
            </WhoWeAreTitle>
            <Wrappers>
                <Wrapper>
                    <p><BsWhatsapp />Atuando no mercado desde 2019, a Up Milhas visa contribuir conceitual e operacionalmente com a sua agência a fim de ampliar a geração de resultados.</p>
                    <p> <BsWhatsapp />Nossa missão é colaborar com as agências de viagem a fim de proporcionar uma maior eficiência para o seu negócio, tornando-o mais competitivo no mercado e trazendo uma margem que permite melhor alocação de capital.</p>
                </Wrapper>
                <Wrapper>
                    <p> <BsWhatsapp />A Up Milhas conta com experientes profissionais em suas áreas de atuação e reúne uma equipe multidisciplinar altamente qualificada, permitindo a prestação de serviços completos adequados a cada necessidade.</p>
                    <p> <BsWhatsapp />Trabalhamos com soluções seguras, eficazes e econômicas, dentro das melhores práticas de mercado.</p>
                </Wrapper>
            </Wrappers>
        </WhoWeAreContainer>
    )
}

const WhoWeAreContainer = styled.section`
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 50px;
    background: #DADADA;

    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 50px 20px 50px 20px; 
    }

`

const Wrappers = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const Wrapper = styled.div`
    cursor: pointer;
    width: 45%;
    margin-right: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    svg {
        color: #FF6B00;
        margin-right: 10px;
    }

    p {
        font-size: 32px;
        overflow-wrap: break-word;
        font-weight: 300;
        color: #000;
        line-height: 48px;
        margin-bottom: 25px;
        transition: all .2s;

        &:hover {
            color: #FF6B00;
        }
    }

    @media (max-width: 1000px) {
        width: 95%;
        margin: 0;

        p {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 15px;
        }
    }
`

const WhoWeAreTitle = styled.h1`
    font-family: Roboto;
    width: min(500px, 50vw);
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 70px;
    text-align: center;
    color: #000000;

    span {
        color: #FF6B00;
    }

    @media(max-width: 1000px) {
        font-size: 32px;
        line-height: 42px;
    }


    @media(max-width: 600px) {
        width: 90vw;
    }
`

export default WhoWeAre;
