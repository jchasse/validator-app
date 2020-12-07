import React from 'react'
import {Nav, Tab, Row, Col} from 'react-bootstrap'

import UserInput from './users/UserInput'
import LoginInput from './LoginInput'

export default function LoginToggle() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <LoginInput />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <UserInput />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
    )
}
