import {v4 as uuid} from 'uuid'

const listingsReducer = (state = [], action) => {

    switch(action.type) {

        case 'ADD_LISTING':
            const listing = { title: action.payload.title, content: action.payload.content, id: uuid() }
            return [ ...state, listing]


        case 'DELETE_LISTING':
            const listings = state.filter(listing => listing.id !== action.payload)
            return listings
        
        case 'EDIT_LISTING':
            debugger
            const editedListingArray = state.map(listing => listing.id === action.payload.listing.id ? action.payload.listing : listing)
            return editedListingArray

        default:
            return state
    }
}

export default listingsReducer