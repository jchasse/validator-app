import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Card, Button, Col} from 'react-bootstrap'

import {addListing, editListing} from '../../actions/listings'
import States from '../States'


class ListingInput extends Component {

    constructor({id, title, city, state, content, price, cashflow, link, votes}) {

        super()
        this.state = {
            id: (id ? id : ''),
            title: (id ? title : ''),
            city: (id ? city : ''),
            state: (id ? state : ''),
            content: (id ? content : ''),
            price: (id ? price : ''),
            cashflow: (id ? cashflow : ''),
            link: (id ? link : ''),
            votes: (id ? votes : '')
        }
    }

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
            votes: 0
        })
        // this.props.history.push(`/listings/${this.state.id}`)
        this.props.history.push(`/listings`)

    }

    componentDidUpdate(prevProps) {
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
                    {/* <Card.Img variant="top" src="https://picsum.photos/800/200" />               */}
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