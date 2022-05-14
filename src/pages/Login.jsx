import styled from "styled-components"
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({height:"55vh"})}
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    ${mobile({width:"65%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#e1dfdf;
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
    cursor: pointer;

    &:hover{
        background-color: #b0b0b0;
    }
`;

const AddLink = styled.a`
    text-decoration: none;
    color: black;
    margin-top: 15px;

    &:hover{
        color: #8e8d8d;
    }
`;

const Login = () => {
  return (
      <>
    <Navbar/>
    <Anouncement/>
    
    <Container>
        
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Email" />
                <Input placeholder="Passwrod" />
                <AddLink href="/">Forgot Password?</AddLink>
                <AddLink href="/">CLICK HERE TO REGISTER</AddLink>
                <Button>Login</Button>
            </Form>
            
        </Wrapper>
        
    </Container>
    
    <Footer/>
    </>
  )
}

export default Login