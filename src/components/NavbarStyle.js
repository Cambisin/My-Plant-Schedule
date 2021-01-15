import styled from "styled-components";

 export const MenuLink = styled.a`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #495867;
  transition: all 0.1s ease-in;
  font-size: 1.2rem;
  &:hover {
    color: #2B5419;
    border-bottom: 1px solid #c9ada7;
    transition: all 0.2s ease-in;
  }
  &:visited {
    text-decoration: none;
    color: #495867;
  }
`;

 export const Nav = styled.div`
  font-family: 'Fira Mono', monospace;
  background: whitesmoke;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

 export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.2s ease-in;
    width: 100%;
  }
`;

 export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #C18C5D;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;