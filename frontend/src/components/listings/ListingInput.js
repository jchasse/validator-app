import React, { Component } from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'


class ListingInput extends Component {

    // constructor(props) {

    //     // const { id, title, city, state, content, price, cashflow, link } = this.props.listing

    //     super(props)
    //     this.state = {
    //         id: (this.props.listing ? this.props.listing.id : ''),
    //         title: (this.props.listing ? this.props.listing.title : ''),
    //         city: (this.props.listing ? this.props.listing.city : ''),
    //         state: (this.props.listing ? this.props.listing.state : ''),
    //         content: (this.props.listing ? this.props.listing.content : ''),
    //         price: (this.props.listing ? this.props.listing.price : ''),
    //         cashflow: (this.props.listing ? this.props.listing.cashflow : ''),
    //         link: (this.props.listing ? this.props.listing.link : '')
    //     }
    // }

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
                <Form onSubmit={(event) => this.handleOnSubmit(event)}> 
                    <Form.Group>
                        <Card border="dark">
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

