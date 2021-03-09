import React, { useState } from "react";
import { MenuLink, Nav, Menu, Hamburger} from "./NavbarStyle";
import PlantLogo from "./PlantLogo.png";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Image = styled.img`
width: 200px;
`

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <a href="/">
      <Image
        src={PlantLogo}
        alt="Plant Logo"
     />
      </a>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink>
           <Link to="/AddPlant"><MenuLink>ADD NEW PLANT</MenuLink></Link>
           </MenuLink>
        <MenuLink>
           <Link to="/AllPlants"><MenuLink>EXPLORE PLANTS</MenuLink></Link>
        </MenuLink>
        <MenuLink>
        <Link to="/MoreInfo"><MenuLink>MORE INFO</MenuLink></Link>
        </MenuLink>
      </Menu>
    </Nav>
  );
};
