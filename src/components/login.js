import React from "react";
import axios from "axios";
import { Label, Form, Button, Select } from "./AddPlantStyle";
import { Link, useHistory} from "react-router-dom";
  
  const Login = ({ handleChange, value, setUser }) => {
    const history = useHistory();    
    
        const handleSubmit = (e) => {
          e.preventDefault();
    
          axios
          .post("http://127.0.0.1:5001/login", {
          email: value.email,
          password: value.password,
        })
        .then((res) => {
            setUser(res);
            history.push("/home")
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
  
    return (
      <div className="email">
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
          
        
          <Button type="submit">L O G I N</Button>
        </Form>
        <Link to="/register">Not a member? Register here.</Link>
      </div>
    );
  };
  
  export default Login;