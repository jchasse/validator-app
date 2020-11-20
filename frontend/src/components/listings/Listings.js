import React, { Component } from 'react'
import Listing from './Listing'

class Listings extends Component {
    render() {
        const listingsList = this.props.listings.map( listing => <Listing key={listing.id} listing={listing} deleteListing={this.props.deleteListing}/>)
        return (
            <>
                {listingsList}
            </>
        )
    }
}

export default Listings