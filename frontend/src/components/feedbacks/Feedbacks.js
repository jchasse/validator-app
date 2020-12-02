import React from 'react'
import Feedback from './Feedback'


function Feedbacks(props){ 
    const feedbacksList = props.feedbacks.map( feedback => <Feedback key={feedback.id} feedback={feedback} />)

    return <>{feedbacksList}</>
}

export default Feedbacks