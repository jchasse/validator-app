import React from 'react'
import {Card, Button} from 'react-bootstrap'


export default function Listing(props) {
    return (
        <>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/800" />              
                <Card.Body>
                    <Card.Title>
                        {props.listing.title}
                    </Card.Title>
                    <Card.Text>
                        {props.listing.id} - {props.listing.content}
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
            </Card>
        </>
    )
}
