import React from 'react'
import {connect} from 'react-redux'
import ListingInput from '../components/listings/ListingInput'
import {addListing, deleteListing} from '../actions/listings'
import Listings from '../components/listings/Listings'


class ListingsContainer extends React.Component {

    render() {
        return (
            <div>
                {/* LisingsContainer */}
                <ListingInput addListing={this.props.addListing} />
                <Listings listings={this.props.listings} deleteListing={this.props.deleteListing}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({listings: state.listings})

// const mapDispatchToProps = dispatch => {
//     return {
//         addListing: listing => dispatch({action: "ADD_LISTING", payload: listing})
//     }
// }

export default connect(mapStateToProps, {addListing, deleteListing})(ListingsContainer)