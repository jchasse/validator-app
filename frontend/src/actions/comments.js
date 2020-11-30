// export const fetchListings = () => {
//     return (dispatch) => {
//         const url = "http://localhost:3000/listings"
//         fetch(url)
//             .then(response => response.json())
//             .then( listings => {
//                 console.log(`INDEX FETCH FIRED: ${listings.data}`)
//                 dispatch({
//                     type: "FETCH_LISTINGS",
//                     payload: listings.data
//                 })
//             })
//     }
// }

// export const addListing = listing => {
//     return (dispatch) => {
//         const url = "http://localhost:3000/listings"
//         const options = {
//             method: "POST",
//             headers: {"Content-Type": "application/json", "Accept": "application/json"},
//             body: JSON.stringify({listing})
//         }

//         fetch(url, options)
//             .then(response => response.json())
//             .then(listing => {
//                 console.log(`CREATE FETCH FIRED: ${listing.data}`)
//                 dispatch({
//                     type: "ADD_LISTING", 
//                     payload: listing.data
//                 })
//             })
//     }
// }