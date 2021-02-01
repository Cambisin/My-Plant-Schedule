import React from "react";
import axios from "axios";
import { Label, Form, Button, Select } from "./AddPlantStyle";
import { Link } from "react-router-dom";

const Register = ({ handleChange, value }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value.password === value.confirmPassword) {
            console.log("Passwords match!");

            axios.post("http://127.0.0.1:5001", {
                email: value.email,
                password: value.password,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        }
    };
  
    return (
      <div className="Register">
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
            EMAIL
            <input
              type="email" 
              required placeholder="email ..." onChange={handleChange}
              name="email" />
          </Label>
          <Label htmlFor="name">
            PASSWORD
            <input
             type="password"
             required placeholder="password ..." onChange={handleChange}
             name="password" 
            />
          </Label>
          <Label htmlFor="name">
            CONFIRM PASSWORD
            <input
             type="password"
             required placeholder="password ..." onChange={handleChange}
             name="password" 
            />
          </Label>
          <Button type="submit">R E G I S T E R</Button>
        </Form>
      </div>
    );
  };
  
  export default Register;