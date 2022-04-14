import { useEffect } from "react";
import styled from "styled-components";

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
            <p>Atuando no mercado desde 2019, a Up Milhas visa contribuir conceitual e operacionalmente com a sua agência a fim de ampliar a geração de resultados.</p>
            <p>Nossa missão é colaborar com as agências de viagem a fim de proporcionar uma maior eficiência para o seu negócio, tornando-o mais competitivo no mercado e trazendo uma margem que permite melhor alocação de capital.</p>
            <p>A Up Milhas conta com experientes profissionais em suas áreas de atuação e reúne uma equipe multidisciplinar altamente qualificada, permitindo a prestação de serviços completos adequados a cada necessidade.</p>
            <p>Trabalhamos com soluções seguras, eficazes e econômicas, dentro das melhores práticas de mercado.</p>
        </WhoWeAreContainer>
    )
}

const WhoWeAreContainer = styled.section`
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 50px;

    p {
        font-size: 24px;
        text-align: start;
        margin-bottom: 20px;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 50px 20px 50px 20px; 

        p {
            font-size: 18px;
        }
    }

`

const WhoWeAreTitle = styled.h1`
    font-family: Roboto;
    width: min(500px, 50vw);
    font-size: 36px;
    line-height: 56px;
    margin-bottom: 40px;
    text-align: center;
    align-self: center;
    color: #000000;

    span {
        color: #3A98D5;
    }

    @media(max-width: 1000px) {
        font-size: 26px;
        line-height: 42px;
    }


    @media(max-width: 600px) {
        width: 90vw;
    }
`

export default WhoWeAre;
