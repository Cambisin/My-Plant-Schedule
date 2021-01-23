import React from "react";
import styled from 'styled-components';

export const Card = styled.div`
font-family: 'Fira Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-evenly;
color: #2B5419;
background: whitesmoke;
margin: 20px;
padding: 30px;
border: 4px solid grey;
`

const NewPlantCard = ({
  name,
  watering,
  feeding,
  sunlightLevel,
}) => {
  return (
    <Card>
      <div className="name">
        <h3>{name}</h3>
      </div>
      <div className="watering">
        <span>Watering: {watering}</span>
      </div>
      <div className="feeding">
        <span>Fertilizer Required: {feeding}</span>
      </div>
      <div className="sunlight level">

        <span>Sunlight Level: {sunlightLevel}</span>
      </div>
    </Card>
  );
};

export default NewPlantCard;

