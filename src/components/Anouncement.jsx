import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`;


const Anouncement = () => {
  return (
    <Container>
        Free Shipping on order above 50$
    </Container>
  )
}

export default Anouncement