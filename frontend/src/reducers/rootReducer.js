import { combineReducers } from 'redux'
import listingsReducer from './listingsReducer'
 
const rootReducer = combineReducers({
 listings: listingsReducer
//  comments: commentsReducer
})
 
export default rootReducer;