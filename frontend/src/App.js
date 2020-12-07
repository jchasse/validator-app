import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navbar from './components/Navbar'
import ListingsContainer from './containers/ListingsContainer'
import UsersContainer from './containers/UsersContainer'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <ListingsContainer />
        <UsersContainer />
      </div>
    )
  }
}

export default App


// 1) Information asymmetry in the market, such as a lack of transparency or hardly accessible and unreliable data
// 2) The ability to have users generate the content themselves, which accelerates the company’s flywheel effect

// First and foremost, the team’s intention was for the Zestimates feature to be as controversial as possible to spark word-of-mouth and ultimately drive growth. 
// The feature initiated debates with homeowners, since their home values were publicly visible.

// https://productmint.com/zillow-business-model-how-does-zillow-make-money/