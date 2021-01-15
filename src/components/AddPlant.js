import React, { useState } from "react";
import axios from "axios";
import { Label, Form, Button, Select } from "./AddPlantStyle";

const initialState = {
    fields: {
      name: "",
      watering: "",
      feeding: "",
      sunlightLevel: "",
    },
  };
  
  const AddPlant = () => {
    const [fields, setFields] = useState(initialState.fields);
  
    const handleAddPlant = async (event) => {
      event.preventDefault();
      const url = "https://plant-library-api.herokuapp.com/plant";
      await axios
        .post(url, fields)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
  
    const handleFieldChange = (event) => {
      setFields({ ...fields, [event.target.name]: event.target.value });
    };
  
    return (
      <div className="AddPlant">
        <Form onSubmit={handleAddPlant}>
          <Label htmlFor="name">
            NAME
            <input
              id="name"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
            />
          </Label>
          <Label htmlFor="watering">
            WATERING FREQUENCY
            <Select
              id="watering"
              name="watering"
              value={fields.watering}
              onChange={handleFieldChange}
            >
              <option value="Once a week">Once a week</option>
              <option value="Twice a week">Twice a week</option>
              <option value="Once a fortnight">Once a fortnight</option>
              <option value="Once a month">Once a month</option>
            </Select>
          </Label>
          <Label htmlFor="feeding">
            FEEDING
            <Select
              id="feeding"
              name="feeding"
              value={fields.feeding}
              onChange={handleFieldChange}
            >
              <option value="Needed">Needed</option>
              <option value="Not needed">Not needed</option>

            </Select>
          </Label>
          <Label htmlFor="sunlightLevel">
            SUNLIGHT LEVEL
            <Select
              id="sunlightLevel"
              name="sunlightLevel"
              value={fields.sunlightLevel}
              onChange={handleFieldChange}
            >
              <option value="Dark">Dark</option>
              <option value="Partial Sunlight">Partial Sunlight</option>
              <option value="Bright">Bright</option>

            </Select>
          </Label>
          <Button type="submit">C R E A T E</Button>
        </Form>
      </div>
    );
  };
  
  export default AddPlant;