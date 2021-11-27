import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    color: #FF69B4;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`;


const Tittle = styled.h3`
    margin-bottom: 30px;
    color: #FF69B4;
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
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payments = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOPEVE</Logo>
                <Desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quibusdam sequi laborum praesentium vitae fugit cum dolorem consequuntur.
                    Autem repellendus tempore nulla voluptatum omnis velit 
                    aspernatur nisi molestias, similique ducimus tempora?
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Tittle>Usefull Links</Tittle>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Transaction</ListItem>
                    <ListItem>Living Room</ListItem>
                    <ListItem>Kitchen Part</ListItem>
                    <ListItem>Laundry Sets</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Tittle>Contact Us</Tittle>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>Jababeka Education Park, Jl. Ki Hajar Dewantara, 
                RT.2/RW.4, Mekarmukti, Kec. Cikarang Utara, Bekasi, Jawa Barat 17530
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+62 812 234 345
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{marginRight:"10px"}}/> 
                    Contact@Shop.eve
                </ContactItem>
                <Payments src = "https://i.ibb.co/yncsNwT/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
