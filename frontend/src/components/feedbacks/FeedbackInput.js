import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, Button, ListGroupItem, Row, Col} from 'react-bootstrap'

import { addFeedback, editFeedback} from '../../actions/feedbacks'


class FeedbackInput extends Component {

    constructor({id, comment, listingId}) {
        super()
        this.state = {
            id: (id ? id : ''),
            comment: (comment ? comment : ''),
            listingId: (listingId ? listingId : '')
        }
    }

    handleOnChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
        
    handleOnSubmit(event) {
        event.preventDefault()
        if (!this.props.id) {
            this.props.addFeedback(this.state)
        } else {
            this.props.editFeedback(this.state)
            this.props.editOrSubmit()
        }
        this.setState({
            id: '',
            comment: '',
            listing_id: ''
        })
    }

    render() {
        const editOrSubmit = () => !this.props.id ? 'Submit' : 'Update'
        return (
            <ListGroupItem>
                <Form onSubmit={(event) => this.handleOnSubmit(event)}> 
                        <Row>
                            <Col>
                                <Form.Control
                                className="mb-2 mr-sm-4" 
                                name="comment" 
                                value={this.state.comment}
                                placeholder="Comment"
                                onChange={(event) => this.handleOnChange(event)} />
                            </Col>
                            <Col xs={2}>
                                <Button className="float-right" variant="outline-secondary" size="sm" type="submit" > {editOrSubmit()} </Button>
                            </Col>
                        </Row>
                </Form>
            </ListGroupItem>
        )
    }
}

export default connect(null, {addFeedback, editFeedback})(FeedbackInput)