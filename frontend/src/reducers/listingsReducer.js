import {v4 as uuid} from 'uuid'

const listingsReducer = (state = [], action) => {

    let listings
    let listing
    let index

    switch(action.type) {

        case 'FETCH_LISTINGS':
            listings = action.payload.map(listing => {
                return Object.assign( {}, {id: listing.id}, listing.attributes)
            })
            console.log(`Reducer: ${listings}`)
            return listings

        case 'ADD_LISTING':
            const listing = { title: action.payload.title, content: action.payload.content, id: uuid() }
            return [listing, ...state]


        case 'DELETE_LISTING':
            const listings = state.filter(listing => listing.id !== action.payload)
            return listings
        
        case 'EDIT_LISTING':
            const editedListingArray = state.map(listing => listing.id === action.payload.id ? action.payload : listing)
            return editedListingArray

        default:
            return state
    }
}

export default listingsReducer