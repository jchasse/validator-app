import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './App.css'

import ListingsContainer from './containers/ListingsContainer'
import Navbar from './components/Navbar'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container fluid>
          {/* <ListingsContainer /> */}
          <Row>
            <Col sm={4}><ListingsContainer /></Col>
            <Col className="map"> </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App