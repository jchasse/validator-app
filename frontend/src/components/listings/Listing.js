import React from 'react'
import {Card, Button, Image, Row, Container} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import '../../App.css'


function Listing(props) {

    const handleOnDelete = () => {
        props.deleteListing(props.listing.id)
        props.history.push('/listings')
      }

    return (
        <>
            <Card>
                </Card.Body>
            </Card>
        </>
    )
}


export default withRouter(Listing)