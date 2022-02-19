import styled from "styled-components";

const Button = styled.a`
    cursor: pointer;
    position: relative;
    backface-visibility: hidden;
    text-decoration: none;
    display: inline-block;
    font-weight: 300;
    margin-top: ${props => props.marginTop};
    background-color: #FF6B00;
    color: #fff;
    padding: ${props => props.padding};
    border-radius: 3rem;
    font-size: 1.3rem;
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
        background-color: #FF6B00;
        z-index: -1;
    }
`

export default Button;
