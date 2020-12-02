import { combineReducers } from 'redux'
import listingsReducer from './listingsReducer'

 
const rootReducer = combineReducers({
    listings: listingsReducer
})
 
export default rootReducer;