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
            debugger
            listing = Object.assign( {}, {id: action.payload.id}, action.payload.attributes)
            // listing = { title: action.payload.title, content: action.payload.content, id: uuid(), votes: 0 }
            return [listing, ...state]

        case 'DELETE_LISTING':
            listings = state.filter(listing => listing.id !== action.payload)
            return listings
        
        case 'EDIT_LISTING':
            const editedListingArray = state.map(listing => listing.id === action.payload.id ? action.payload : listing)
            return editedListingArray
         
        case 'UPVOTE_LISTING':
            index = state.findIndex( listing => listing.id === action.payload.id)
            listing = state[index]
            return [...state.slice(0, index), Object.assign({}, listing, { votes: listing.votes += 1 }), ...state.slice(index + 1)]

        case 'DOWNVOTE_LISTING':
            index = state.findIndex( listing => listing.id === action.payload.id)
            listing = state[index]
            return [...state.slice(0, index), Object.assign({}, listing, { votes: listing.votes -= 1 }), ...state.slice(index + 1)]

        default:
            return state
    }
}

export default listingsReducer