const listingsReducer = (state = [], action) => {

    let listings
    let listing
    let index

    switch(action.type) {

        case 'FETCH_LISTINGS':
            listings = action.payload.map(listing => Object.assign( {}, {id: listing.id}, listing.attributes) )
            console.log(`FETCH REDUCER FIRED: ${listings}`)
            return listings

        case 'ADD_LISTING':
            listing = Object.assign( {}, {id: action.payload.id}, action.payload.attributes)
            console.log(`CREATE REDUCER FIRED: ${listing}`)
            return [listing, ...state]

        case 'DELETE_LISTING':
            listings = state.filter(listing => listing.id !== action.payload)
            console.log(`DELETE REDUCER FIRED: ${listings}`)
            return listings
        
        case 'EDIT_LISTING':
            listings = state.map(listing => listing.id === action.payload.id ? (Object.assign( {}, {id: action.payload.id}, action.payload.attributes)) : listing )
            console.log(`EDIT REDUCER FIRED: ${listings}`)
            return listings
         
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