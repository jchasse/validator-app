import React from 'react'
import {withRouter} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import LoginModal from './LoginModal'
 
function NavBar(){

    const [modalShow, setModalShow] = React.useState(false)

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand>BiZinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <LinkContainer to="/listings">
                            <Nav.Link>Listings</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/listings/new">
                            <Nav.Link>New Listing</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users/new">
                            <Nav.Link>New User</Nav.Link>
                        </LinkContainer> */}
                    </Nav>
                    <Nav>
                        <LinkContainer to="/listings">
                            <Nav.Link>Listings</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/listings/new">
                            <Nav.Link>Add Listings</Nav.Link>
                        </LinkContainer>

                        
                    </Nav>
                    <Button variant="dark" size="sm" onClick={() => setModalShow(true)}>Sign Up or Log In</Button>
                    <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}
    
export default withRouter(NavBar)