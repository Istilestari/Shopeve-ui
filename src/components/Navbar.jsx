import { Badge } from '@material-ui/core';
import { AccountCircleOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})}
`;

const Wrapper =  styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    color: #FF69B4;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid #FF69B4;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;   
    color: #FF69B4;
    ${mobile({ width: "50px"})}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    color: #FF69B4;
    ${mobile({ fontSize: "24px"})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #FF69B4;
    ${mobile({ flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"#FF69B4", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SHOPEVE</Logo>
                </Center>
                <Right>
                    <MenuItem>Isti (Cashier)</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={0} color= "435C73">
                      <AccountCircleOutlined/>
                    </Badge>
                    </MenuItem>
                    <MenuItem>
                    <Badge badgeContent={7} color= "435C73">
                      <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            
            </Wrapper>   
        </Container>
    )
}

export default Navbar
