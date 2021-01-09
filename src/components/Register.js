import React from 'react';

const Register = () => {
    return( 
        <>
        <h1>Register</h1>
        <form action="submit">
            <input type="email" required />
            <input type="password"required />
            <input type="password"required />
            <button type="submit">Submit</button>
        </form>
        <p>Already a member? Login here</p>
        </>
     );
}

export default Register;