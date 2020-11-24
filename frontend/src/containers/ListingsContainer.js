import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import ListingInput from '../components/listings/ListingInput'
import Listings from '../components/listings/Listings'
import Listing from '../components/listings/Listing'
import {fetchListings, addListing, deleteListing, editListing, upvoteListing, downvoteListing} from '../actions/listings'

class ListingsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/listings/new'>
                        <ListingInput addListing={this.props.addListing} />    
                    </Route>
                    <Route exact path='/listings/:id' render={ routerProps => <Listing 
                        {...routerProps} 
                        listing={this.props.listings.find( listing => listing.id === routerProps.match.params.id)} 
                        editListing={this.props.editListing}
                        deleteListing={this.props.deleteListing}
                        />} 
                    />
                    <Route exact path='/listings/:id/edit' render={ routerProps => <ListingInput 
                        {...routerProps} 
                        listing={this.props.listings.find( listing => listing.id === routerProps.match.params.id)} 
                        editListing={this.props.editListing}  
                        deleteListing={this.props.deleteListing}
                        />} 
                    />
                    <Route exact path='/listings'>
                        <ListingInput addListing={this.props.addListing} />    
                        <Listings listings={this.props.listings} deleteListing={this.props.deleteListing} upvoteListing={this.props.upvoteListing} downvoteListing={this.props.downvoteListing} />   
                    </Route>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({listings: state.listings})

export default connect(mapStateToProps, {fetchListings, addListing, deleteListing, editListing, upvoteListing, downvoteListing})(ListingsContainer)