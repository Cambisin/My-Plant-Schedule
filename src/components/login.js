import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import styled, { withTheme } from 'styled-components'

export const StyledInput = styled.input
border-radius: 8px;
border: 1px solid black ;
height: 25px;
font-size: 16px;
;

export const StyledButton = styled.button'
border-radius: 4px;
border: 1px solid black;
height: 30px;
font-size: 16px;
background-color: withTheme;
color: gray;
';

export const StyledForm = styled.form'
display: flex;
flex-direction: column;
width: 33%;
margin: Auto;
';


const Login = () => {
    return( 
        <>
        <h1>Login</h1>
        <form action="submit">
            <input type="email" required />
            <input type="password"required />
            <button type="submit">Login</button>
        </form>
        <p>Not a member? Register here</p>
        </>
     );
}

export default Login;