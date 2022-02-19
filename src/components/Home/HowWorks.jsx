import { useEffect } from "react";
import styled from "styled-components";

const HowWorks = ({howWorksRef, setIntersected, setHeaderShown}) => {
    useEffect(() => {
        const observationOptions = {
            rootMargin: "0px 0px 0px 0px",
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                console.log('interceptei');
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
                Quais são os benefícios de ser um <span>parceiro UP Milhas</span>
            </HowWorksTitle>
        </HowWorksContainer>
    )
}

const HowWorksContainer = styled.section`
    height: 745px;
    display: flex;
    justify-content: center;
    padding: 50px;

`

const HowWorksTitle = styled.h1`
    font-family: Roboto;
    width: min(700px, 60vw);
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;

    span {
        color: #FF6B00;
    }
`

export default HowWorks;
