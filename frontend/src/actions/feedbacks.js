export const addFeedback = feedback => {
    return (dispatch) => {
        const url = `http://localhost:3000/listings/${feedback.listingId}/feedbacks`
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({feedback})
        }

        fetch(url, options)
            .then(response => response.json())
            .then(listing => {
                console.log("CREATE FETCH: FEEDBACK")
                dispatch({
                    type: "EDIT_LISTING", 
                    payload: listing.data
                })
            })
    }
}

