import styled from "styled-components";

const FAQ = () => {
    return(
        <FAQContainer>
            <FAQTitle>
                Perguntas Frequentes
            </FAQTitle>
        </FAQContainer>
    )
}

const FAQContainer = styled.section`
    height: 745px;
    display: flex;
    justify-content: center;
    padding: 50px;
`

const FAQTitle = styled.h1`
    font-family: Roboto;
    width: min(800px, 70vw);
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #000000;
`

export default FAQ;
