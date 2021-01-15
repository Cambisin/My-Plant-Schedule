import React, { useState } from "react";
import { MenuLink, Nav, Logo, Menu, Hamburger} from "./NavbarStyle";
import PlantLogo from "./PlantLogo.png";
import styled from 'styled-components';

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
        <MenuLink href="">ADD NEW PLANT</MenuLink>
        <MenuLink href="">PLANT LIBRARY</MenuLink>
        <MenuLink href="">CONTACT</MenuLink>
      </Menu>
    </Nav>
  );
};
