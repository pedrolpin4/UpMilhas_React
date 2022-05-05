import styled from "styled-components";

const Numbers = () => {
    return(
        <NumbersContainer >
            <NumbersTitle>
                Principais Marcas do Sucesso da <span>UP Milhas</span>
            </NumbersTitle>
            <Wrappers>
                <Wrapper>
                    <div><h2>+1000</h2><p>Passagens obtidas em 2022</p></div>
                </Wrapper>
                <Wrapper>
                    <div><h2>+120M</h2><p>Milhas movimentadas</p></div>
                </Wrapper>
                <Wrapper>
                    <div><h2>70</h2><p>Clientes corporativos</p></div>
                </Wrapper>
            </Wrappers>
        </NumbersContainer>
    )
}

const NumbersContainer = styled.section`
    display: flex;
    width: 100vw;
    font-family: Roboto;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background-color: #173D57;

    @media (max-width: 1000px) {
        padding: 30px 15px;
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
        flex-direction: column;
        align-items: center;
        min-height: 100px;
        margin-bottom: 55px;
        color: #fff;
    }

    svg {
        font-size: 70px;
        color: #3A98D5;
        margin-right: 20px;
    }

    p {
        font-size: 30px;
        overflow-wrap: break-word;
        font-weight: 500;
        line-height: 48px;
        transition: all .2s;
    }

    h2 {
        font-size: 70px;
        margin-bottom: 20px;
        overflow-wrap: break-word;
        font-weight: 500;
        color: #3A98D5;
        line-height: 48px;
        transition: all .2s;
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

        h2 {
            font-size: 45px;
            margin-bottom: 10px;
        }
    }

`


const NumbersTitle = styled.h1`
    font-family: Roboto;
    width: min(700px, 60vw);
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 70px;
    text-align: center;
    color: #fff;

    span {
        color: #3A98D5;
    }

    @media(max-width: 1000px) {
        font-size: 32px;
        line-height: 42px;
    }

    @media(max-width: 600px) {
        width: 90vw;
    }
`

export default Numbers;
