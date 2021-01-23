import axios from "axios";
import React, { useEffect, useState } from "react";
import NewPlantCard from "./newPlantCard";
import Alert from "./Alert";
import styled from "styled-components";

export const Heading = styled.h2`
color: white;
background: #C18C5D;
padding: 10px;
`

const initialState = {
  plants: [],
  alert: {
    message: "",
    isSuccess: false,
  },
};

function Plants() {
  const [plants, setPlants] = useState(initialState.plants);

  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get(`https://plant-library-api.herokuapp.com/plant`)
      .then((res) => {
        setPlants(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setAlert({ message: "Data Error", isSuccess: false });
        console.log(err);
      });
  }, []);
  return (
    <>
      <Heading>EXPLORE PLANTS</Heading>
      {plants.map((plant) => (
        <NewPlantCard key={plant.id} {...plant} />
      ))}
      <Alert message={alert.message} success={alert.isSuccess} />
    </>
  );
}

export default Plants;