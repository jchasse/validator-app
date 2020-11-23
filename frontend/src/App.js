import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

import ListingsContainer from './containers/ListingsContainer'
import Navbar from './components/Navbar'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container fluid="md">
          <ListingsContainer />
        </Container>

      </div>
    )
  }
}

export default App