import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({padding:"10px",flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    margin-left: 30px;
    width: 85%;
    height: 60vh;
    object-fit: cover;
    ${mobile({width:"90%", objectFit: "contain",height:"40vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
         
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    margin-top: 10px;
`;

const Filter = styled.div``;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%",marginTop:"10px"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;



const Product = () => {
    
  return (
    <Container>
        
        <Navbar/>
        <Anouncement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.bitkart.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/a/_/a_502.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>RTX 3060</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquam cum distinctio optio sint voluptatibus quaerat voluptatem similique sit, eligendi id magni vero accusantium corporis consequuntur ab eum iure doloribus?
                </Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>4GB</FilterSizeOption>
                        <FilterSizeOption>6GB</FilterSizeOption>
                        <FilterSizeOption>8GB</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product