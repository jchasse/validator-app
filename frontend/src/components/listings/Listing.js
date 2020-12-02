import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card, Button, Row, Col, ListGroup} from 'react-bootstrap'

import '../../App.css'
// import { format } from "date-fns"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {deleteListing} from '../../actions/listings'
import FeedbacksContainer from '../../containers/FeedbacksContainer'

function Listing(props) {

    const handleOnDelete = () => {
        props.deleteListing(props.listing.id)
        props.history.push('/listings')
      }

    //   "2020-11-25T17:51:21.019Z"
    // let formattedDate = props.listing && props.listing.created_at ? format(props.listing.created_at, "MMMM do, yyyy H:mma") : ""

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
                            <Button className="float-right" variant="danger" size="sm" onClick={ () => handleOnDelete()}> <FontAwesomeIcon icon={faTrash} /> </Button>
                            <Button className="float-right" variant="secondary" size="sm" onClick={ () => props.history.push(`/listings/${props.listing.id}/edit`)} ><FontAwesomeIcon icon={faEdit} /></Button>
                        </Col>
                    </Row>                    
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <FeedbacksContainer listing={props.listing}/>
                </ListGroup>
            </Card>
        </>
    )
}
export default withRouter(connect(null, {deleteListing})(Listing))