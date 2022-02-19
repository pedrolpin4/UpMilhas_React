import styled from "styled-components";

const WhoWeAre = () => {
    return(
        <WhoWeAreContainer>
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
`

export default WhoWeAre;
