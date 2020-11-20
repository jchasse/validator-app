import React, { Component } from 'react'
import {Form, Card, Button} from 'react-bootstrap'

class ListingInput extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            content: ''
        }
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <>
                <Form class="row justify-content-center" onSubmit={(event) => this.handleOnSubmit(event)}> 
                    <Form.Group>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/800" />              
                            <Card.Body>
                                <Card.Title>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control 
                                            name="title" 
                                            type="text"
                                            value={this.state.title}
                                            placeholder="Listing Title" 
                                            className="font-weight-bold" 
                                            onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>
                                    {this.state.title}
                                </Card.Title>
                                <Card.Text>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control 
                                        name="content" 
                                        as="textarea" 
                                        value={this.state.content}
                                        rows={3} 
                                        placeholder="Listing Content"
                                        onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>
                                    {this.state.content}
                                </Card.Text>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Card.Body>
                        </Card>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default ListingInput
