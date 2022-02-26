import { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import styled from "styled-components"
import ap from '../../assets/airplane.jpg';
import apMobile from '../../assets/airplaneMobile.jpg';
import Button from "../shared/Button";
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import YoutubeId from "./YoutubeId";
import apiKey from '../../utils/emailkey';
import emailjs from '@emailjs/browser';
import dayjs from "dayjs";
import Joi from "joi";

const Register = ({ registerRef, setIntersected, setHeaderShown, intersected }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [telError, setTelError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const emailSchema = Joi.string().required();
            const nameSchema = Joi.string().required();
            const telfoneSchema = Joi.string().min(10).max(13);

            if(telfoneSchema.validate(phone).error) {
                setTelError(true);
                return;
            }

            if(nameSchema.validate(name).error) {
                setNameError(true);
                return;
            }

            if(emailSchema.validate(email).error) {
                setEmailError(true);
                return;
            }

            setTelError(false);
            setNameError(false);
            setEmailError(false);

            await emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID,{
                to_name: "upmilhas",
                name,
                email,
                phone,
                date: dayjs().format('DD/MM/YYYY'),
                reply_to: email,
                from_name: name,
            }, apiKey.USER_ID);
            
            alert("Informações enviadas, entraremos em contato em breve");    
        } catch (error) {
            alert("Um erro ocorreu, por favor tente novamente");
        }
    }

    useEffect(() => {
        const observationOptions = {
            rootMargin: "0px 0px 0px 0px",
            threshold: 0.2,
        };

        const headerObserver = new IntersectionObserver(([entry]) => {
            if(!entry.isIntersecting){
                setHeaderShown(true)
                setIntersected(2)
            }

            if(entry.isIntersecting){
                setHeaderShown(false)
                setIntersected(1)
            } else{
                setIntersected(prev => prev)
            }

        }, observationOptions)

        if(registerRef.current){
            headerObserver.observe(registerRef.current)
        }
    }, [registerRef, setHeaderShown, setIntersected, intersected]);



    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
        <RegisterContainer ref={registerRef}>
                <div>
                    <YoutubeId id = {"0qCnLLrs94o"} />
                </div>
                <FormWrapper>
                    <UPTitle>
                        UP Milhas
                    </UPTitle>
                    <FormContent onSubmit={handleSubmit} id = {"test"}>
                        <FormTitle>
                            Saiba como se cadastrar
                        </FormTitle>
                        <TextField
                            error = {nameError ? true : false}
                            required
                            type = "name"
                            id="outlined-error"
                            label="Nome"
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
                            value={phone}
                            color = "info"
                            onChange={(e) => setPhone(e.target.value)}
                            helperText={telError ? "Digite um telefone válido DDD + número" : ''}
                            sx = {{width: '100%', height: 49, marginBottom: 4, borderRadius:'50'}}
                        />
                        <Button padding = "0.8rem 5rem"  paddingMobile = "0.8rem 5rem" marginTop = "20px" type="submit" form = "test">
                            Cadastrar
                        </Button>
                    </FormContent>
                </FormWrapper>
        </RegisterContainer>
        </LocalizationProvider>

    )
}

export default Register;

const RegisterContainer = styled.section`
    font-family: Roboto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 108px 50px 50px 50px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${ap});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: normal, darken;

    iframe {
        width: 45vw;
        height: 27vw;
        margin-right: 6vw;
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;

        iframe {
            width: 65vw;
            margin-right: 0;
            height: 400px;
            margin-bottom: 100px;
        }
    }

    @media (max-width: 600px) {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${apMobile})
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-blend-mode: normal, darken;

        iframe{
            width: 90vw;
            height: 300px;
        }
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