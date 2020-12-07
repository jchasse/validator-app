export const fetchUsers = () => {
    return (dispatch) => {
        const url = "http://localhost:3000/users"
        fetch(url)
            .then(response => response.json())
            .then( users => {
                console.log("INDEX FETCH FIRED: USERS")
                dispatch({
                    type: "FETCH_USERS",
                    payload: users.data
                })
            })
    }
}

export const addUser = user => {
    return (dispatch) => {
        const url = "http://localhost:3000/users"
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({user})
        }

        fetch(url, options)
            .then(response => response.json())
            .then(authUser => {
                debugger
                console.log("CREATE FETCH FIRED: USER")
                dispatch({
                    type: "ADD_USER", 
                    payload: authUser.data
                })
            })
    }
}

export const editUser = user => {
    return (dispatch) => {
        const url = `http://localhost:3000/users/${user.id}`
        const options = {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({user})
        }

        fetch(url, options)
            .then(response => response.json())
            .then(user => {
                console.log("EDIT FETCH FIRED: USER")
                dispatch({
                    type: "EDIT_USER", 
                    payload: user.data
                })
            })
    }
}

export const deleteUser = userId => {
    return (dispatch) => {
        const url = `http://localhost:3000/users/${userId}`
        const options = {method: "DELETE"}

        fetch(url, options)
            .then(response => response.json())
            .then(message => {
                console.log("DELETE FETCH FIRED: USER")
                dispatch({
                    type: "DELETE_USER", 
                    payload: userId
                })
            })
    }
}

export const loginUser = user => {
    debugger
    return (dispatch) => {
        const url = "http://localhost:3000/login"
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(user)
        }

        fetch(url, options)
            .then(response => response.json())
            .then(user => {
                console.log("LOGIN FETCH FIRED")
                dispatch({
                    type: "LOGIN_USER", 
                    payload: user.data
                })
            })
    }
}



// fetch("/api/foo")
//   .then(response => {
//     if (!response.ok) { throw response }
//     return response.json()  //we only get here if there is no error
//   })
//   .then(json => {
//     doSomethingWithResult(json)
//   })
//   .catch(err => {
//     err.text().then(errorMessage => {
//       displayTheError(errorMessage)
//     })
//   })