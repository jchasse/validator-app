import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import ListingInput from '../components/listings/ListingInput'
import Listings from '../components/listings/Listings'
import Listing from '../components/listings/Listing'
import {fetchListings, addListing, deleteListing, editListing} from '../actions/listings'

class ListingsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/listings/new'>
                        <ListingInput />    
                    </Route>
                    <Route exact path='/listings/:id' render={ routerProps => <Listing 
                        {...routerProps} 
                        listing={this.props.listings.find( listing => listing.id === routerProps.match.params.id)} 
                        />} 
                    />
                    <Route exact path='/listings/:id/edit' render={ routerProps => <ListingInput 
                        {...routerProps} 
                        listing={this.props.listings.find( listing => listing.id === routerProps.match.params.id)}
                        />} 
                    />
                    <Route exact path='/listings'>
                        {/* <Listings /> */}
                        <Listings listings={this.props.listings} />   
                    </Route>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({listings: state.listings})

export default connect(mapStateToProps, {fetchListings, addListing, deleteListing, editListing})(ListingsContainer)