import styled from "styled-components"
import Navbar from "../components/Navbar"
import Anouncement from "../components/Anouncement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"



const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

`;

const Option = styled.option`

`;


const ProductList = () => {
  return (
    <Container>
        <Anouncement/>
        <Navbar/>
        <Title>Graphic Card</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>4GB</Option>
                    <Option>6GB</Option>
                    <Option>8GB</Option>
                </Select>
                <Select>
                    <Option disabled selected>Brand</Option>
                    <Option>Nvidia</Option>
                    <Option>AMD</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Low to High</Option>
                    <Option>High to Low</Option>
                </Select>
            </Filter>

        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList