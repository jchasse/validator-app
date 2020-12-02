import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ListGroupItem, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {editFeedback, deleteFeedback} from '../../actions/feedbacks'
class Feedback extends Component {

    state = {
        edit: false
    }

    render() {
        if (this.state.edit === false) {
            return (
                <ListGroupItem>
                    {this.props.feedback.comment}
                    <Button className="float-right" variant="outline-danger" size="sm" onClick={ () => this.props.deleteFeedback(this.props.feedback.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                    <Button className="float-right" variant="outline-secondary" size="sm" onClick={ () => this.editOrSubmit()}><FontAwesomeIcon icon={faEdit} /></Button>
                    <footer className="blockquote-footer"><cite>{this.props.feedback.id}</cite></footer>                
                </ListGroupItem>    
            )
        } else {
    }
}
export default connect(null, {editFeedback, deleteFeedback})(Feedback)