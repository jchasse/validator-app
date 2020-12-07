import React, { Component } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default class ListingFull extends Component {
    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col id="listinggray">
                        {/* <Image src={`${this.props.listing.link}`} fluid /> */}
                            1
                        </Col>
                    
                        <Col id="listingpurple">
                            2
                        </Col>                        
                    </Row>

                </Container>
            </>
        )
    }
}
