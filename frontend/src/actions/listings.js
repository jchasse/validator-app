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
    return {
      type: 'ADD_LISTING',
      payload: listing
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