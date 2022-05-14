import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import styled from 'styled-components'

import paymentMethod from "./Images/payment_method.png"


const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    padding: 20px;
    flex-direction: column;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px; 
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
`;

const  ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
  return (
    <Container>
        <Left>
     
            <Logo>PC Shop</Logo>
            <Desc>PC Shop is dedicated to 100% customer delight ensuring that everything from placing your order to delivering it right to your doorstep is smooth and hassle-free. If you have any issues with your purchase, the easy exchange and replacement policies comes to your rescue.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon >
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Graphics Card</ListItem>
                <ListItem>Mouse</ListItem>
                <ListItem>Keyboard</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>         
            </List>
        </Center>
        
        
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 123,PC Shop, Jaipur, Rajasthan, 343029
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1234567890
            </ContactItem>
            <ContactItem>
                <MailOutlined style={{marginRight:"10px"}}/> pooransen50@gmail.com
            </ContactItem>
            <Payment src={paymentMethod}/>
        </Right>
    </Container>
  )
}

export default Footer