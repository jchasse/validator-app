const usersReducer = (state = [], action) => {

    let users
    let user

    switch(action.type) {

        case 'FETCH_USERS':
            users = action.payload.map(user => Object.assign( {}, {id: user.id}, user.attributes) )
            console.log("FETCH REDUCER FIRED: USERS")
            return users

        case 'ADD_USER':
            user = Object.assign( {}, {id: action.payload.id}, action.payload.attributes)
            console.log("CREATE REDUCER FIRED: USER")
            return [user, ...state]

        case 'DELETE_USER':
            users = state.filter(user => user.id !== action.payload)
            console.log("DELETE REDUCER FIRED: USER")
            return users
        
        case 'EDIT_USER':
            users = state.map(user => user.id === action.payload.id ? (Object.assign( {}, {id: action.payload.id}, action.payload.attributes)) : user )
            console.log("EDIT REDUCER FIRED: USER")
            return users

        case 'LOGIN_USER':
            debugger
            // users = state.map(user => user.id === action.payload.id ? (Object.assign( {}, {id: action.payload.id}, action.payload.attributes)) : user )
            // console.log("EDIT REDUCER FIRED: USER")
            return user

        default:
            return state
    }
}

export default usersReducer