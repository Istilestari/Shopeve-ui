import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({ padding: "10px"})}
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

const FilterContainer  = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`;

const Filter  = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle  = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize  = styled.select`
    margin-left: 10px;
    padding: 5px;
    border: 1px solid pink;
`;

const FilterSizeOption  = styled.option``;

const AddContainer  = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`;

const AmountContainer  = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount  = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid pink;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button  = styled.button`
    font-weight: 500;
    padding: 15px;
    border: 3px solid pink;
    background-color: white;
    cursor: pointer;
    border-radius: 10px;

    &: hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src = "https://images.samsung.com/is/image/samsung/p6pim/id/ua65au9000kxxd/gallery/id-crystal-uhd-au9000-ua65au9000kxxd-423135784?$684_547_PNG$"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>QN900A Neo QLED 8K Smart TV (2021)</Title>
                    <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Enim exercitationem doloribus autem atque quisquam, 
                    deserunt sequi tempora pariatur odit vitae iusto facilis ratione reiciendis aperiam at, 
                    laudantium sed? Quasi, obcaecati.
                    </Desc>
                    <Price>Rp 12.000.000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Inch</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption>"80 Inch"</FilterSizeOption>
                            <FilterSizeOption>"70 Inch"</FilterSizeOption>
                            <FilterSizeOption>"60 Inch"</FilterSizeOption>
                            <FilterSizeOption>"55 Inch"</FilterSizeOption>
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
            <Footer/>
        </Container>
    )
}

export default Product
