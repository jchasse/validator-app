import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

import ListingInput from '../components/listings/ListingInput'
import Listings from '../components/listings/Listings'
import Listing from '../components/listings/Listings'
import {addListing, deleteListing} from '../actions/listings'

class ListingsContainer extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/listings'>
                        <Listings listings={this.props.listings} deleteListing={this.props.deleteListing}/>   
                    </Route>
                    <Route exact path='/listings/new'>
                        <ListingInput addListing={this.props.addListing} />    
                    </Route>
                    {/* <Route exact path='/listings/:id' render={ routerProps => <Listing {...routerProps} listing={this.props.listings.find( listing => listing.id === routerProps.match.params.id)} />} /> */}
                    {/* <Route path=''>
                        {alert('This page does not exist.')}
                        <Redirect to='/listings' />
                    </Route> */}
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({listings: state.listings})

export default connect(mapStateToProps, {addListing, deleteListing})(ListingsContainer)