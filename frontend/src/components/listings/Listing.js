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
                <Card.Body>
                    <Container> 
                        <Row>
                            <Image src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" roundedCircle/>  
                            <div>
                                <Card.Title>
                                    {props.listing.title}
                                </Card.Title>  
                                <Card.Text>
                                    <p class="card-text"><i class="far fa-clock pr-2"></i>{props.listing.created_at}</p>
                                </Card.Text>
                            </div>
                        </Row>
                    </Container>
                    <Container>
                        <Card.Img variant="top" src="https://picsum.photos/800/200" />   
                        <Card.Text>
                            {props.listing.content}
                        </Card.Text>
                    </Container>
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
                    <Card.Footer className="text-muted">
                        <Button
                            className="btn btn-secondary"
                            onClick={ () => props.upvoteListing(props.listing)}>
                            +
                        </Button>
                        <span> Votes: {props.listing.votes} </span>
                        <Button
                            className="btn btn-secondary"
                            onClick={ () => props.downvoteListing(props.listing)}>
                            -
                        </Button>                        
                    </Card.Footer>


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