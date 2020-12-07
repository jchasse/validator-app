import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default class GridViewer extends Component {
    render() {
        return (
            <>
                <div id="listingpurple">
                    Hello
                </div>
                <Container id="listinggray" >
                    Not fluid
                </Container>
                <div>.</div>
                <Container fluid id="listingteal" noGutters={true} >
                    Outside of row
                <Row noGutters={true} id="listinggray">
                        Outside column
                        <Col id="listingpurple"> Fluid Container, No Gutter Row, Col</Col>
                    </Row>
                </Container>
                <div>.</div>
                <Container fluid id="listingteal">
                    Fluid
                </Container>
                <div>.</div>
                <Container>
                    <Row noGutters={true}>
                        <Col id="listingpurple">No Gutter 1 of 2</Col>
                        <Col id="listinggray">No Gutter 2 of 2</Col>
                    </Row>
                </Container>
                <div>.</div>
                <Container>
                    <Row>
                        <Col id="listinggray">1 of 12</Col>
                        <Col id="listingpurple">2 of 12 </Col>
                        <Col id="listinggray">3 of 12</Col>
                        <Col id="listingpurple">4 of 12 </Col>
                        <Col id="listinggray">5 of 12</Col>
                        <Col id="listingpurple">6 of 12 </Col>
                        <Col id="listinggray">7 of 12</Col>
                        <Col id="listingpurple">8 of 12 </Col>
                        <Col id="listinggray">9 of 12</Col>
                        <Col id="listingpurple">10 of 12 </Col>                        
                        <Col id="listinggray">11 of 12</Col>
                        <Col id="listingpurple">12 of 12 </Col>
                    </Row>
                    <Row>
                        <Col xs="auto" id="listingteal">___________________Really_Wide_Auto__________________</Col>
                        <Col xs="auto" id="listingpurple">_______________Medium_Auto____________</Col>
                        <Col xs="auto" id="listinggray">_____Small_Auto____</Col>
                    </Row>
                </Container>
                <div>.</div>
                <Container fluid>
                    <Row>
                        <Col sm={8} id="listingteal">sm=8</Col>
                        <Col sm={4} id="listinggray">sm=4</Col>
                    </Row>
                    <Row>
                        <Col sm id="listingpurple">sm=true</Col>
                        <Col sm id="listinggray">sm=true</Col>
                        <Col sm id="listingteal">sm=true</Col>
                    </Row>
                </Container>
                <div>.</div>
                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col xs={12} md={8} id="listingpurple">
                        xs=12 md=8
                        </Col>
                        <Col xs={6} md={4} id="listinggray">
                        xs=6 md=4
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={6} md={4} id="listinggray">
                        xs=6 md=4
                        </Col>
                        <Col xs={6} md={4}>
                        xs=6 md=4
                        </Col>
                        <Col xs={6} md={4} id="listingpurple">
                        xs=6 md=4
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col xs={6} id="listingpurple">xs=6</Col>
                        <Col xs={6} id="listinggray">xs=6</Col>
                    </Row>
                </Container>
                <div>.</div>
                <Container fluid>
                    <Row>
                        <Col md={4} id="listingpurple">md=4</Col>
                        <Col md={{ span: 4, offset: 4 }} id="listinggray">{`md={{ span: 4, offset: 4 }}`}</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 3, offset: 3 }} id="listinggray">{`md={{ span: 3, offset: 3 }}`}</Col>
                        <Col md={{ span: 3, offset: 3 }} id="listingpurple">{`md={{ span: 3, offset: 3 }}`}</Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} id="listingpurple">{`md={{ span: 6, offset: 3 }}`}</Col>
                    </Row>
                </Container>
                <div>.</div>
                <Container>
                    <Row xs={2} md={4} lg={6}>
                        <Col id="listingpurple">1 of 2</Col>
                        <Col id="listingteal">2 of 2</Col>
                    </Row>
                    <Row xs={1} md={2}>
                        <Col id="listingteal">1 of 3</Col>
                        <Col id="listingpurple">2 of 3</Col>
                        <Col id="listinggray">3 of 3</Col>
                    </Row>
                </Container>
            </>
        )
    }
}