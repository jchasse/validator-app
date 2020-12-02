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
                </Card.Body>
            </Card>
        </>
    )
}
export default withRouter(connect(null, {deleteListing})(Listing))