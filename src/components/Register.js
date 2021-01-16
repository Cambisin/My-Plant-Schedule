import React from 'react';
import { StyledInput, StyledButton, StyledForm, Container } from "./Login";


const Register = () => {
    return( 
        <Container>
        <h1>Register</h1>
        <StyledForm action="submit">
            <StyledInput type="email" required />
            <StyledInput type="password"required />
            <StyledInput type="password"required />
            <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
        <p>Already a member? Login here</p>
        </Container>
     );
}

export default Register;