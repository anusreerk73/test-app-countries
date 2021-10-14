import React from 'react';
import style from './header.module.scss'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {

    return (
        <div className={style.homeWrap}>
        <Navbar bg="light" expand="lg" className="navs">
        <Container>
            <Navbar.Brand href="#all">Countries</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link href="#all">All</Nav.Link>
                <Nav.Link href="#asia">Asia</Nav.Link>
                <Nav.Link href="#europe">Europe</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )   
}

export default Header;