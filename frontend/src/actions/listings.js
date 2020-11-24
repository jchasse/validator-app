export const fetchListings = () => {
    return (dispatch) => {
        const url = "http://localhost:3000/listings"
        fetch(url)
            .then(response => response.json())
            .then( listings => {
                console.log(`INDEX FETCH FIRED: ${listings.data}`)
                dispatch({
                    type: "FETCH_LISTINGS",
                    payload: listings.data
                })
            })
    }
}

export const addListing = listing => {
    return (dispatch) => {
        const url = "http://localhost:3000/listings"
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({listing})
        }

        fetch(url, options)
            .then(response => response.json())
            .then(listing => {
                console.log(`CREATE FETCH FIRED: ${listing.data}`)
                dispatch({
                    type: "ADD_LISTING", 
                    payload: listing.data
                })
            })
    }
}

export const editListing = listing => {
    return (dispatch) => {
        const url = `http://localhost:3000/listings/${listing.id}`
        const options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({listing})
        }

        fetch(url, options)
            .then(response => response.json())
            .then(listing => {
                console.log(`EDIT FETCH FIRED: ${listing.data}`)
                dispatch({
                    type: "EDIT_LISTING", 
                    payload: listing.data
                })
            })
    }
}
//     return {
//         type: 'EDIT_LISTING',
//         payload: listing
//     }
// } 

export const deleteListing = listingId => {
    return (dispatch) => {
        const url = `http://localhost:3000/listings/${listingId}`
        const options = {method: "DELETE"}

        fetch(url, options)
            .then(response => response.json())
            .then(message => {
                console.log(`DELETE FETCH FIRED(${message}): ${listingId}`)
                dispatch({
                    type: "DELETE_LISTING", 
                    payload: listingId
                })
            })
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