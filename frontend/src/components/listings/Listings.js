import React from 'react'
// import {connect} from 'react-redux'

import Listing from './Listing'
// import {listings} from '../../containers/ListingsContainer'


function Listings(props){ 
    const listingsList = props.listings.map( listing => <Listing key={listing.id} listing={listing} />)
    
    return <>{listingsList}</>
}

export default Listings
// export default connect(null, {listings})(Listings)