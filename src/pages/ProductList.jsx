import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

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
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column"})} 
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px"})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px"})}
`;

const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Television</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected>
                            Inch
                        </Option>
                        <Option>More than 80"</Option>
                        <Option>70"~79"</Option>
                        <Option>60"~69"</Option>
                        <Option>50"~59"</Option>
                        <Option>40"~49"</Option>
                        <Option>30"~39"</Option>
                        <Option>20"~29"</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Brand
                        </Option>
                        <Option>SAMSUNG</Option>
                        <Option>LG</Option>
                        <Option>Xiomi</Option>
                        <Option>TOSHIBA</Option>
                        <Option>AKARI</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList
