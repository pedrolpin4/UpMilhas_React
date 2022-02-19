import { useState } from "react";
import styled from "styled-components"
import baloons from '../../assets/baloons.jpg';
import Button from "../shared/Button";
import YoutubeId from "./YoutubeId";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <RegisterContainer>
            <div>
                <YoutubeId id = {"0qCnLLrs94o"} />
            </div>
            <FormWrapper>
                <UPTitle>
                    UP Milhas
                </UPTitle>
                <FormContent>
                    <FormTitle>
                        Saiba como se cadastrar
                    </FormTitle>
                    <FormInput placeholder="Name" value={name} onChange ={(e) => setName(e.target.value)}/>
                    <FormInput placeholder="Email" type="email" value={email} onChange ={(e) => setEmail(e.target.value)}/>
                    <FormInput placeholder="Senha" type= "password" value={password} onChange ={(e) => setPassword(e.target.value)}/>
                    <Button padding = "0.8rem 5rem"  marginTop = "20px" type="submit">
                        Cadastrar
                    </Button>
                </FormContent>
            </FormWrapper>
        </RegisterContainer>
    )
}

export default Register;

const RegisterContainer = styled.section`
    margin-top: 108px;
    font-family: Roboto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 50px 50px 50px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${baloons});
    background-size: cover;
    background-blend-mode: normal, darken;

    iframe {
        width: 40vw;
        height: 22.5vw;
        margin-right: 10vw;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UPTitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 60px;
    line-height: 70px;
    text-align: center;
    color: #FFFDFD;
    text-transform: uppercase;
    margin-bottom: 30px;
    padding: 20px;
    border: 5px solid #fff;
`

const FormContent = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(495px, 90vw);
    background: #3E4E50;
    border-radius: 15px;
    padding: 40px;
`

const FormInput = styled.input `
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border: none;
    margin: 13px 0;
    width: 100%;
    height: 49px;
    font-size: 1.3rem;
    background: #FFFEFE;
    border-radius: 15px;

    &::placeholder {
        font-family: Roboto;
        font-size: 1.3rem;
    }
`

const FormTitle = styled.h2`
    text-transform: uppercase;
    width: min(325px, 70vw);
    font-size: 32px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 25px;
`