import React, { Component } from 'react'
import Listing from './Listing'
// import {CardDeck, CardColumns} from 'react-bootstrap'


class Listings extends Component {
    
    render() {
        const listingsList = this.props.listings.map( listing => <Listing key={listing.id} listing={listing} deleteListing={this.props.deleteListing} upvoteListing={this.props.upvoteListing} downvoteListing={this.props.downvoteListing}/>)
        return (
            <>
            {listingsList}
            </>
        )
    }
}

export default Listings