import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
 
function NavBar(){

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand>BiZinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/listings">
                            <Nav.Link>Listings</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/listings/new">
                            <Nav.Link>New Listing</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}
    
export default NavBar