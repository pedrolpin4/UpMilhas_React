import { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import styled from "styled-components"
import baloons from '../../assets/baloons.jpg';
import Button from "../shared/Button";
import YoutubeId from "./YoutubeId";

const Register = ({ registerRef, setIntersected }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [telError, setTelError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        const observationOptions = {
            rootMargin: "0px 0px -800px 0px",
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIntersected(1)
            } else{
                setIntersected(prev => prev)
            }

        }, observationOptions)

        if(registerRef.current){
            headerObserver.observe(registerRef.current)
        }
    }, [registerRef, setIntersected]);

    return (
        <RegisterContainer ref={registerRef}>
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
                    <TextField
                        error = {nameError ? true : false}
                        required
                        type = "name"
                        id="outlined-error"
                        label="Nome"
                        defaultValue=""
                        value={name}
                        color = "info"
                        onChange={(e) => setName(e.target.value)}
                        helperText={nameError ? "Digite um nome válido, sem números ou caractéres especiais" : ''}
                        sx = {{width: '100%', height: 49, marginBottom: 4, borderRadius:'50'}}
                    />                    
                    <TextField
                        error = {emailError ? true : false}
                        required
                        type = "email"
                        id="outlined-error"
                        label="Email"
                        defaultValue=""
                        value={email}
                        color = "info"
                        onChange={(e) => setEmail(e.target.value)}
                        helperText={emailError ? "A entrada deve ser um email válido" : ''}
                        sx = {{width: '100%', height: 49, marginBottom: 4, borderRadius:'50'}}
                    />                    
                    <TextField
                        error = {telError ? true : false}
                        required
                        type = "tel"
                        id="outlined-error"
                        label="Telefone"
                        defaultValue=""
                        value={phone}
                        color = "info"
                        onChange={(e) => setPhone(e.target.value)}
                        helperText={telError ? "Digite um telefone válido DDD + número" : ''}
                        sx = {{width: '100%', height: 49, marginBottom: 4, borderRadius:'50'}}
                    />
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
    background-repeat: no-repeat;
    background-attachment: fixed;
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
    background: #fafafa;
    border-radius: 15px;
    padding: 40px;
`

const FormTitle = styled.h2`
    text-transform: uppercase;
    width: min(325px, 70vw);
    font-size: 32px;
    text-align: center;
    color: #3E4E50;
    margin-bottom: 25px;
`