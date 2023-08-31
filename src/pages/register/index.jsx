import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import api from '../../services/api';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

import { Container, Title, Column, TitleLogin, SubtitleLogin, TermsText, LoginText, Row, Wrapper, AlreadyRegistered } from './styles';

const schema = yup.object({
    name: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
    email: yup.string().email('Email não é válido').required("Campo obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
})

const Register = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try{
            console.log(formData);
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            alert("Houve um erro, tente novamente")
            console.log("Error: " + e);
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name" control={control} errorMessage={errors?.name?.message}/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} errorMessage={errors?.email?.message}/>
                    {/* {errors.email && <span>E-mail é obrigatório</span>} */}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="password" control={control}  errorMessage={errors?.password?.message}/>
                    {/* {errors.senha && <span>Senha é obrigatório</span>} */}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <TermsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsText>
                <Row>
                    <AlreadyRegistered>Já tenho conta. </AlreadyRegistered>
                    <LoginText href="/login">Fazer login</LoginText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export default Register;