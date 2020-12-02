import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Card, Button, Col} from 'react-bootstrap'

import {addListing, editListing} from '../../actions/listings'
import States from '../States'


class ListingInput extends Component {

    constructor() {
        super()
        this.state = {
                id: '',
                title: '',
                city: '',
                state: '',
                content: '',
                price: '',
                cashflow: '',
                link: '',
                votes: ''
}}

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
        
    handleOnSubmit(event) {
        event.preventDefault()
        if (!this.props.listing) {
            this.props.addListing(this.state)
        } else {
            this.props.editListing(this.state)
        }
        this.setState({
            id: '',
            title: '',
            city: '',
            state: '',
            content: '',
            price: '',
            cashflow: '',
            link: '',
            votes: ''
        })
        // this.props.history.push(`/listings/${this.state.id}`)
        this.props.history.push(`/listings`)

    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        if (this.props.listing){ 
            this.setState({
                ...this.props.listing
            })
        }
        // this.props.listing? this.setState({...this.props.listing}) : null
    }

    componentDidUpdate(prevProps) {
        console.log("COMPONENT DID UPDATE")
        if (prevProps !== this.props){ 
            this.setState({
                ...this.props.listing
            })
        }
    }

    render() {
        const editOrSubmit = () => !this.props.listing ? 'Submit' : 'Update'
        
        return (
            <>
                <Card border="dark" bg="dark">
                    <Card.Body>
                        <Form onSubmit={(event) => this.handleOnSubmit(event)}> 
                            <Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control name="title" type="text" value={this.state.title} placeholder="Listing Title" className="font-weight-bold" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridPrice">
                                        <Form.Control name="price" type="text" value={this.state.price} placeholder="Asking Price" onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridCashflow">
                                        <Form.Control name="cashflow" type="text" value={this.state.cashflow} placeholder="Cashflow" onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Control name="city" type="text" value={this.state.city} placeholder="City" onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control name="state" as="select" value={this.state.state} placeholder="Choose..." onChange={(event) => this.handleOnChange(event)}>
                                            <States />
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control 
                                        name="content" 
                                        as="textarea" 
                                        value={this.state.content}
                                        rows={3} 
                                        placeholder="Listing Content"
                                        onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                        name="link" 
                                        type="text"
                                        value={this.state.link}
                                        placeholder="Listing Picture Link" 
                                        onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>                                
                                <Button className="float-right" variant="outline-light" type="submit"> {editOrSubmit()} </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>                
            </>
        )
    }
}

export default withRouter(connect(null, {addListing, editListing})(ListingInput))