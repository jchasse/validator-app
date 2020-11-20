
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