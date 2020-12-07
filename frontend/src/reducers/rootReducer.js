import { combineReducers } from 'redux'
import listingsReducer from './listingsReducer'
import usersReducer from './usersReducer'

 
const rootReducer = combineReducers({
    listings: listingsReducer,
    users: usersReducer
})
 
export default rootReducer;