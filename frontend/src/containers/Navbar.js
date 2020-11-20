import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

 
function NavBar(){

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">REinder</Navbar.Brand>
                <Nav className="mr-auto" activeKey={window.location.pathname}>
                    <LinkContainer to="/listings">
                        <Nav.Link>Listings</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/listings/new">
                        <Nav.Link>New Listing</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </>

    )
}
    
export default NavBar