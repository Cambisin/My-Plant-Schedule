import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Calendar } from './components/calendar.js';
import styled from 'styled-components';

import "./styles.css";
import { Navbar } from './components/Navbar.js';
import AddPlant from './components/AddPlant.js';


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Switch>
    <Container>
      <Navbar/>
      <Route exact path="/AddPlant" component={AddPlant} />
      <Route exact path= "/" component={Calendar} />
    </Container>
    </Switch>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);