import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

//export const StyledInput = styled.input'
//border-radius: 8px;
//border: 1px solid black ;
//height: 25px;
//font-size: 16px;
//;

//export const StyledButton = styled.button'
//border-radius: 4px;
//border: 1px solid black;
//height: 30px;
//font-size: 16px;
//background-color: withTheme;
//color: gray;
//';

//export const StyledForm = styled.form'
//display: flex;
//flex-direction: column;
//width: 33%;
//margin: Auto;
//';

//export const Title = styled.h1"
//display: flex;
//flex-direction: column;
//justify-conent: Center;
//margin: auto;
//";

const Login = () => {
    return( 
        <Container>
        <Title>Login</Title>
        <StyledForm action="submit">
            <StyledInput type="email" required />
            <StyledInput type="password"required />
            <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        <p>Not a member? Register here</p>
        </Container>
     );
}

export default Login;