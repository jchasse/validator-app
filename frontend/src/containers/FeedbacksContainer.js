import React from 'react'

import FeedbackInput from '../components/feedbacks/FeedbackInput'
import Feedbacks from '../components/feedbacks/Feedbacks'

function FeedbacksContainer(props){ 

        return (
            <>
                <FeedbackInput listingId={props.listing.id} />    
                <Feedbacks feedbacks={props.listing.feedbacks} />   
            </>
        )
}

export default FeedbacksContainer