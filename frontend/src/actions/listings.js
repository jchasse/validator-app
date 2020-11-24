export const fetchListings = () => {
    const url = "http://localhost:3000/listings"
    return (dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then( listings => {
                console.log(listings.data)
                dispatch({
                    type: "FETCH_LISTINGS",
                    payload: listings.data
                })
            })
    }
}

export const addListing = listing => {
    return (dispatch) => {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({listing})
        }

        fetch("http://localhost:3000/listings", options)
            .then(response => response.json())
            .then(listing => {
                console.log(listing.data)
                dispatch({
                    type: "ADD_LISTING", 
                    payload: listing.data
                })
            })
    }
}

export const deleteListing = listingId => {
    return {
        type: 'DELETE_LISTING',
        payload: listingId
    }
} 

export const editListing = listing => {
    return {
        type: 'EDIT_LISTING',
        payload: listing
    }
} 

export const upvoteListing = listing => {
    return {
        type: 'UPVOTE_LISTING',
        payload: listing
    }
} 

export const downvoteListing = listing => {
    return {
        type: 'DOWNVOTE_LISTING',
        payload: listing
    }
} 