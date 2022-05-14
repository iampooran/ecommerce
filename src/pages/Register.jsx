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
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    ${mobile({width:"65%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size:12px;
    margin: 20px 0px;
    ${mobile({fontSize:"14px"})}
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:#e1dfdf;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: #b0b0b0;
    }
`;

const Register = () => {
  return (
      <>
      
      <Navbar/>
      <Anouncement/>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Passwrod" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACT POLICY</b>
                </Agreement>
                <Button>Register</Button>
            </Form>
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Register