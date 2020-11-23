import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'


function Listing(props) {

    const handleOnDelete = () => {
        props.deleteListing(props.listing.id)
        props.history.push('/listings')
      }

    return (
        <>
            <Card>
                <Card.Img variant="top" src="https://picsum.photos/800/200" />              
                <Card.Body>
                    <Card.Title>
                        {props.listing.title}
                    </Card.Title>
                    <Card.Text>
                        {props.listing.id} - {props.listing.content}
                    </Card.Text>
                    <Button 
                        variant="secondary"
                        onClick={ () => props.history.push(`/listings/${props.listing.id}/edit`)} >
                        Edit
                    </Button>
                    <Button 
                        variant="danger"
                        onClick={ () => handleOnDelete()}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>


            {/* <Card>
                <Card.Img variant="top" src="https://picsum.photos/800/200" />
                <Card.Header as="h5">{props.listing.title}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    {props.listing.content}
                    </Card.Text>
                    <Button 
                        variant="secondary">
                        Edit
                    </Button>
                    <Button 
                        variant="danger"
                        onClick={ () => props.deleteListing(props.listing.id)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card> */}

        </>
    )
}


export default withRouter(Listing)