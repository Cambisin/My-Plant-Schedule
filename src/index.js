import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Calendar } from './components/calendar.js';
import styled from 'styled-components';

import "./styles.css";
import { Navbar } from './components/Navbar.js';
import AddPlant from './components/AddPlant.js';
// import NewPlantCard from './components/newPlantCard.js';
import Plants from './components/AllPlants';
import Login from './components/login.js';
import Register from './components/Register';


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
      <Route exact path= "/" component={Calendar} />
      <Route exact path="/AddPlant" component={AddPlant} />
      <Route exact path="/AllPlants" component={Plants} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
    </Container>
    </Switch>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);