import React, { Component } from 'react'
import {connect} from 'react-redux'


class FeedbackInput extends Component {

    constructor({id, comment, listingId}) {
        super()
        this.state = {
        }
    }


    render() {
}

export default connect(null, {addFeedback, editFeedback})(FeedbackInput)