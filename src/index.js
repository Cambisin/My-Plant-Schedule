import * as React from 'react';
import { render } from 'react-dom';
import { Login } from './components/login.js';

import "./styles.css";
import { Navbar } from './components/Navbar.js';


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Navbar/>
      <h1>Simple Calendar</h1>
<<<<<<< HEAD
      <Login />
=======
      <Calendar />
      
>>>>>>> b2a3c787f4f70ae3a74d837fd2c9ba140d61477b
    </Container>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);