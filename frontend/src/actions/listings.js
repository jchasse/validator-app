
export const addListing = listing => {
    return {
      type: 'ADD_LISTING',
      payload: listing
    }
 }
  
 export const deleteListing = listingId => {
    return {
        type: 'DELETE_LISTING',
        listingId
    }
 } 