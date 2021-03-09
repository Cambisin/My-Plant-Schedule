import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Calendar } from './components/calendar.js';
import styled from 'styled-components';
import "./styles.css";
import { Navbar } from './components/Navbar.js';
import AddPlant from './components/AddPlant.js';
import Plants from './components/AllPlants';
import PlantCareToDo from './components/ToDoList.js';
import MoreInformation from './components/MoreInfo';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

function App() {
  return (
    <Switch>
      <Container>
        <Navbar />
      <Route exact path= "/" component={PlantCareToDo} />
      <Route exact path= "/" component={Calendar} />
      <Route exact path="/AddPlant" component={AddPlant} />
      <Route exact path="/AllPlants" component={Plants} />
    
      <Route exact path="/MoreInfo" component={MoreInformation} />
      </Container>
    </Switch>
  );
}

export default App;
