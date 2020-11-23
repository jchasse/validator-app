import {v4 as uuid} from 'uuid'

const listingsReducer = (state = [{
    id: "12345",
    title: "Great San Antonio pool route",
    city: "San Antonio",
    state: "TX",
    content: "The perfect route for a buyer that has little or no pool experience. It consists of 35 accounts generating a guaranteed $6,500 per month plus income from repairs. During the current pandemic, pool companies have been classified as essential because of the requirement to treat the water to prevent mosquitoes.",
    price: "110,000",
    cashflow: "100,000",
    link: "https://www.bizbuysell.com/Business-Opportunity/great-san-antonio-pool-route/1769169?d=L3RleGFzLWJ1c2luZXNzZXMtZm9yLXNhbGU="
    }], action) => {

    switch(action.type) {

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