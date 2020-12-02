import React from 'react'
import {Card, Button, Image, Row, Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../../App.css'

import {deleteListing} from '../../actions/listings'

function Listing(props) {

    const handleOnDelete = () => {
        props.deleteListing(props.listing.id)
        props.history.push('/listings')
      }

    return (
        <>
            <Card>
                {/* <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_1280.jpg" /> */}
                <Card.Img variant="top" src={`${props.listing.link}`} />

                <Card.Body> 
                    <Card.Title> {props.listing && props.listing.title} </Card.Title>  
                    <Row>
                        <Col> <Card.Title> Asking Price: {props.listing && props.listing.price} </Card.Title> </Col>
                        <Col> <Card.Title className="float-right"> Cashflow: {props.listing && props.listing.cashflow} </Card.Title> </Col>
                    </Row>
                    <Card.Text>{props.listing && props.listing.content}</Card.Text> 
                    <Row>
                        <Col> 
                            <Card.Title>{props.listing && props.listing.city} - {props.listing && props.listing.state}</Card.Title> 
                            </Col>
                        <Col>
                            <Card.Text> {/* {formattedDate} */} {/* {props.listing && props.listing.created_at} */} </Card.Text>                     
                        </Col>
                        <Col>
                </Card.Body>
            </Card>
        </>
    )
}
export default withRouter(connect(null, {deleteListing})(Listing))