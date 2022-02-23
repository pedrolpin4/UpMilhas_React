import { useEffect } from "react";
import styled from "styled-components";
import { BsWhatsapp, BsLightningCharge } from 'react-icons/bs'
import { MdDateRange, MdPriceCheck } from 'react-icons/md'
import { RiVipLine }  from 'react-icons/ri'
import { AiOutlineLineChart } from 'react-icons/ai'

const HowWorks = ({howWorksRef, setIntersected, setHeaderShown}) => {
    useEffect(() => {
        const observationOptions = {
            rootMargin: "0px 0px 0px 0px",
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIntersected(2)
            } else{
                setIntersected(prev => prev)
            }

        }, observationOptions)

        if(howWorksRef.current){
            headerObserver.observe(howWorksRef.current)
        }
    }, [howWorksRef, setHeaderShown, setIntersected]);

    return(
        <HowWorksContainer ref = {howWorksRef}>
            <HowWorksTitle>
                Quais são os benefícios de ser um <span>parceiro UP Milhas?</span>
            </HowWorksTitle>
            <Wrappers>
                <Wrapper>
                    <div><BsWhatsapp /><p>Atendimento vip e humanizado para nossos parceiros através de WhatsApp.</p></div>
                    <div><MdDateRange /><p> Pagamentos com prazos flexíveis dos bilhetes emitidos em nosso portal.</p></div>
                    <div><RiVipLine /><p> Portal exclusivamente para agências.</p></div>
                </Wrapper>
                <Wrapper>
                    <div><MdPriceCheck /><p>Melhores preços praticados no mercado.</p></div>
                    <div><BsLightningCharge /><p> Rapidez na solução de problemas e emissão de bilhetes.</p></div>
                    <div><AiOutlineLineChart /><p> Programa de benefícios para parceiros Up Milhas.</p></div>
                </Wrapper>
            </Wrappers>
        </HowWorksContainer>
    )
}

const HowWorksContainer = styled.section`
    display: flex;
    width: 100vw;
    font-family: Roboto;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    @media (max-width: 1000px) {
        padding: 50px 15px;
    }

`;

const Wrappers = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
       flex-direction: column;
       align-items: center;
    }
`

const Wrapper = styled.div`
    cursor: pointer;
    width: 45%;
    margin-right: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        min-height: 100px;
        margin-bottom: 55px;
    }

    svg {
        font-size: 70px;
        color: #FF6B00;
        margin-right: 20px;
    }

    p {
        font-size: 30px;
        overflow-wrap: break-word;
        font-weight: 300;
        color: #000;
        line-height: 48px;
        transition: all .2s;

        &:hover {
            color: #FF6B00;
        }
    }

    @media (max-width: 1000px) {
        width: 95%;
        margin: 0;

        div {
            height: auto;
            flex-direction: column;
        }

        svg {
            margin-bottom: 30px;
        }

        p {
            font-size: 24px;
            text-align: center;
            line-height: 32px;
            margin-bottom: 15px;
        }
    }

`


const HowWorksTitle = styled.h1`
    font-family: Roboto;
    width: min(700px, 60vw);
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

export default HowWorks;
