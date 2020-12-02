import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editFeedback, deleteFeedback} from '../../actions/feedbacks'
class Feedback extends Component {

    state = {
        edit: false
    }

    }
}
export default connect(null, {editFeedback, deleteFeedback})(Feedback)