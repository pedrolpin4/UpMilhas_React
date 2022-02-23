import styled from "styled-components";
import List from '@mui/material/List';
import Question from "./Question";
import { useEffect } from "react";

const FAQ = ({ faqRef, setIntersected, setHeaderShown}) => {
    useEffect(() => {
        const observationOptions = {
            rootMargin: "0px 0px -108px 0px",
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIntersected(4)
            } else{
                setIntersected(prev => prev)
            }

        }, observationOptions)

        if(faqRef.current){
            headerObserver.observe(faqRef.current)
        }
    }, [faqRef, setHeaderShown, setIntersected]);

    return(
        <FAQContainer ref = {faqRef}>
            <FAQTitle>
                Perguntas Frequentes
            </FAQTitle>
            <List
                sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Question question= "Sobre a Up Milhas?" answer = "É uma empresa de venda de passagens aéreas com milhas, que atende exclusivamente agentes de viagens."/>
                <Question question= "Como posso me tornar um parceiro?" answer = "Basta preencher o formulário neste site que um de nossos representantes entrará em contato, solicitando mais informações para dar início a parceria."/>
                <Question question= "Para quem é feito a Up Milhas?" answer = "Para as pessoas que trabalham vendendo passagens aéreas ou que querem começar a vender passagens"/>
                <Question question= "Há alguma taxa para eu me tornar um parceiro?" answer = "Não há taxas e nem letras miúdas em nossos contratos. O cadastro é 100% ."/>
                <Question question= "Como funciona a compra de passagens aéreas com milhas?" answer = {`Após tornar-se parceira da Up MIlhas, a agência de viagem terá acesso a um sistema
                    exclusivo, que apresenta em segundos o valor dos bilhetes com milhas.. A agência pode, então, fazer a solicitação da passagem com milhas, no próprio sistema. Depois de finalizada a compra, a empresa recebe o bilhete eletrônico/e-ticket por e-mail.
                    Para mais detalhes sobre a compra de passagens aéreas com milhas, preencha o formulário acima e aguarde o contato de um de nossos representantes.`}
                />
                <Question question= "Por que é vantajoso comprar com a Up Milhas?" answer = "Porque a empresa oferece os menores preços do mercado,  possibilitando aos parceiros maiores lucros para agência e seus clientes. As transações são rápidas, práticas e 100% segura. Além disso, contamos com um suporte totalmente humanizado com nossos parceiros, e disposto a atendê-los. Para mais informações preencha o formulário e aguarde o contato de nossa equipe"/>
                <Question question= "A Up Milhas garante o sigilo das minhas informações e das dos meus clientes?" answer = "Sim, desde o momento do cadastro, todas as informações são mantidas sob o mais absoluto sigilo."/>
            </List>
        </FAQContainer>
    )
}

const FAQContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    @media(max-width: 1000px) {
        padding: 30px;
    }
`

const FAQTitle = styled.h1`
    font-family: Roboto;
    width: min(800px, 70vw);
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;
    margin-bottom: 70px;

    @media(max-width: 1000px) {
        font-size: 32px;
        line-height: 42px;
        margin-bottom: 45px;
    }


    @media(max-width: 600px) {
        width: 90vw;
    }
`

export default FAQ;
