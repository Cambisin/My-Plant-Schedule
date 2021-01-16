import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, CardBorder } from "./PlantCardStyle"


const PlantCard = () => {
  const [plantName, setplantName] = useState("");
  const [plantWatering, setplantWatering] = useState("");
  const [plantFeeding, setplantFeeding] = useState("");
  const [plantSunlightLevel, setSunlightLevel] = useState("");
  const [plants, setPlants] = useState([]);

  const plantData = async () => {
    try {
      const res = await axios.get("https://plant-library-api.herokuapp.com/plant");
      console.log(res);
      setPlants(res.data);
      setplantName(res.data[0].name);
      setplantWatering(res.data[0].watering);
      setplantFeeding(res.data[0].feeding);
      setSunlightLevel(res.data[0].sunlightLevel)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    plantData();
  }, []);


  return (
    <Card>
      <Button onClick={() => plantData()}> A N O T H E R </Button>
      <CardBorder>
        <h1>{plantName.toUpperCase()}</h1>
        <p> WATERING: {plantWatering.toUpperCase()}</p>
        <p> FEEDING: {plantFeeding.toUpperCase()}</p>
        <p> SUNLIGHT LEVEL: {plantSunlightLevel.toUpperCase()}</p>
      </CardBorder>
    </Card>
  );
};

export default PlantCard;