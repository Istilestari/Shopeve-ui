import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0), 
        rgba(255,255,255,0)
    ), 
    url(https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80) 
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    ${mobile({ width: "75%"})}
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 600;
    color: pink;
    text-align: center;
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:10px 0px ;
    padding: 10px;
    border-radius: 25px;
    outline-color: pink;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: pink;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    margin-bottom: 10px; 
`;

const Link = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;       
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SHOPE'VE</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>Sign In</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login