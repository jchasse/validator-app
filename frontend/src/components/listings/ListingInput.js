import React, { Component } from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'


class ListingInput extends Component {

    constructor(props) {

        // const { id, title, city, state, content, price, cashflow, link } = this.props.listing

        super()
        this.state = {
            id: (props.listing ? props.listing.id : ''),
            title: (props.listing ? props.listing.title : ''),
            city: (props.listing ? props.listing.city : ''),
            state: (props.listing ? props.listing.state : ''),
            content: (props.listing ? props.listing.content : ''),
            price: (props.listing ? props.listing.price : ''),
            cashflow: (props.listing ? props.listing.cashflow : ''),
            link: (props.listing ? props.listing.link : '')
        }
    }

    // constructor(props) {
    //     super()
    //     const { id, title, city, state, content, price, cashflow, link } = props.listing

        
    //     this.state = {
    //         id: (id ? id : ''),
    //         title: (title ? title : ''),
    //         city: (city ? city : ''),
    //         state: (state ? state : ''),
    //         content: (content ? content : ''),
    //         price: (price ? price : ''),
    //         cashflow: (cashflow ? cashflow : ''),
    //         link: (link ? link : '')
    //     }
    // }

    // constructor(id, title, city, state, content, price, cashflow, link ) {

    //     super()
    //     this.state = {
    //         id: (id ? id : ''),
    //         title: (id ? title : ''),
    //         city: (id ? city : ''),
    //         state: (id ? state : ''),
    //         content: (id ? content : ''),
    //         price: (id ? price : ''),
    //         cashflow: (id ? cashflow : ''),
    //         link: (id ? link : '')
    //     }
    // }

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

    render() {
        const editOrSubmit = () => !this.props.listing ? 'Submit' : 'Update'
        return (
            <>
                <Form onSubmit={(event) => this.handleOnSubmit(event)}> 
                    <Form.Group>
                        <Card>
                            <Card.Img variant="top" src="https://picsum.photos/800/200" />              
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
                                <Button variant="primary" type="submit"> {editOrSubmit()} </Button>
                            </Card.Body>
                        </Card>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default withRouter(ListingInput) 

