import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import ListingInput from '../components/listings/ListingInput'
import Listings from '../components/listings/Listings'
import ListingCard from '../components/listings/ListingCard'
// import ListingFull from '../components/listings/ListingFull'
import {fetchListings, addListing, deleteListing, editListing} from '../actions/listings'
import GridViewer from '../components/GridViewer'

class ListingsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/gridviewer'>
                        <GridViewer />    
                    </Route>
                    <Route exact path='/listings/new'>
                        <ListingInput />    
                    </Route>
                    <Route exact path='/listings/:id' render={ routerProps => <ListingCard
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
                        <Listings listings={this.props.listings} />   
                    </Route>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => ({listings: state.listings})

export default connect(mapStateToProps, {fetchListings, addListing, deleteListing, editListing})(ListingsContainer)