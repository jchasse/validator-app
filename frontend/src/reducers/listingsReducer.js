import uuid from "uuid"

const listingsReducer = (state = [], action) => {

    switch(action.type) {

        case 'ADD_LISTING':
            const listing = { title: action.payload.title, content: action.payload.content, id: uuid() }
            return [ ...state, listing]


        case 'DELETE_LISTING':
            const listings = state.filter(listing => listing.id !== action.listingId)
            return listings

        default:
            return state
    }
}

export default listingsReducer