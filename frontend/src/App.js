import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import './App.css'

import ListingsContainer from './containers/ListingsContainer'
import Navbar from './components/Navbar'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container sm={8}>
          <ListingsContainer />
        </Container>
      </div>
    )
  }
}

export default App