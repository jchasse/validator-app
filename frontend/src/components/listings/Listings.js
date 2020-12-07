import React from 'react'
import Listing from './ListingCard'


function Listings(props){ 
    const listingsList = props.listings.map( listing => <Listing key={listing.id} listing={listing} />)
    
    return <>{listingsList}</>
}

export default Listings