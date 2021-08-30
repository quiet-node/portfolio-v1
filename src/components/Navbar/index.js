import React from "react";
import { Nav, NavContainer, NavHome } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavHome to="/"> Home </NavHome>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
