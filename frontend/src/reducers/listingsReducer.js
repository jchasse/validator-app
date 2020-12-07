const listingsReducer = (state = [], action) => {

    let listings
    let listing

    switch(action.type) {

        case 'FETCH_LISTINGS':
            listings = action.payload.map(listing => Object.assign( {}, {id: listing.id}, listing.attributes) )
            console.log(`FETCH REDUCER FIRED: LISTINGS`)
            return listings

        case 'ADD_LISTING':
            listing = Object.assign( {}, {id: action.payload.id}, action.payload.attributes)
            console.log(`CREATE REDUCER FIRED: LISTING`)
            return [listing, ...state]

        case 'DELETE_LISTING':
            listings = state.filter(listing => listing.id !== action.payload)
            console.log(`DELETE REDUCER FIRED: LISTING`)
            return listings
        
        case 'EDIT_LISTING':
            listings = state.map(listing => listing.id === action.payload.id ? (Object.assign( {}, {id: action.payload.id}, action.payload.attributes)) : listing )
            console.log(`EDIT REDUCER FIRED: LISTING`)
            return listings

        default:
            return state
    }
}

export default listingsReducer