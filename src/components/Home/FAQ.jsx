import styled from "styled-components";
import List from '@mui/material/List';
import Question from "./Question";
import { useEffect } from "react";

const FAQ = ({ faqRef, setIntersected}) => {
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
    }, [faqRef, setIntersected]);

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
                <Question question= "Por que comprar milhas" answer = "Porque é muito foda"/>
                <Question question= "Por que comprar milhas" answer = "Porque é muito foda"/>
                <Question question= "Por que comprar milhas" answer = "Porque é muito foda"/>
                <Question question= "Por que comprar milhas" answer = "Porque é muito foda"/>
                <Question question= "Por que comprar milhas" answer = "Porque é muito foda"/>
            </List>
        </FAQContainer>
    )
}

const FAQContainer = styled.section`
    height: 745px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`

const FAQTitle = styled.h1`
    font-family: Roboto;
    width: min(800px, 70vw);
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;
    margin-bottom: 70px;
`

export default FAQ;
