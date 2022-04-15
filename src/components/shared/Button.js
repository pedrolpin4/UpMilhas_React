import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    position: relative;
    backface-visibility: hidden;
    text-decoration: none;
    display: inline-block;
    font-weight: 300;
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.color === 'white' ? "15px" : "10px"};
    background-color: ${props => props.color === 'white' ? "#3A98D5" : "#3A98D5"};
    color:  ${props => props.color === 'white' ? "#fff" : "#fff"};
    padding: ${props => props.padding};
    border-radius: 3rem;
    font-size: 1rem;
    transition: all .2s;
    border: none;
    cursor: pointer; 

    &:hover{
        transform: translateY(-0.3rem);
        box-shadow: 0 1rem 2rem rgba(0,0,0, .2);
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active{
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0, .2);
    }

    &::after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 3rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .4s;
        background-color: ${props => props.color === 'white' ? "#3A98D5" : "#3A98D5"};
        z-index: -1;
    }

    @media(min-width: 1600px) {
        font-size: 1.3rem;
    }

    @media(max-width: 1000px) {
        font-size: .8rem;
        margin-left: ${props => props.color === 'white' ? "15px" : "0"};
        padding: ${props => props.paddingMobile};
    }
`

export default Button;
