import * as React from 'react';
import { render } from 'react-dom';
import { Calendar } from './components/calendar.js';

import "./styles.css";


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <h1>Simple Calendar</h1>
      <Calendar />
    </Container>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);