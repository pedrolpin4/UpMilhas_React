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
                Por que comprar com <span>UP Milhas?</span>
            </WhoWeAreTitle>
        </WhoWeAreContainer>
    )
}

const WhoWeAreContainer = styled.section`
    height: 745px;
    display: flex;
    justify-content: center;
    padding: 50px;
    background: #DADADA;
`

const WhoWeAreTitle = styled.h1`
    font-family: Roboto;
    width: min(500px, 50vw);
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;

    span {
        color: #FF6B00;
    }

    @media(max-width: 1000px) {
        font-size: 32px;
        line-height: 42px;
    }
`

export default WhoWeAre;
