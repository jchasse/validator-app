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

                </Card.Body>
            </Card>
        </>
    )
}
export default withRouter(connect(null, {deleteListing})(Listing))