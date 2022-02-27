import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

import Logo from "../../assets/Logo.png";
const pic = "../Image/Screenshot_1-removebg-preview (1) 1.png";
const Navbars = () => {
  return (
    <div className=" navbars">
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        style={{ background: "#030C2A" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto menu">

              <li><a href="#">Home</a></li>
              <li><a href="#">How to Play</a></li>
              <li><a href="#">Action</a></li>

            </Nav> */}
            <Nav className="menu ms-auto">
              <div className="DA_4K">
                <WalletMultiButton />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;

// <div className="nav">
// <div className="logo">
//     Gaming
// </div>

// </div>
// <div className="DA_4K">
// DA...4K
// </div>
