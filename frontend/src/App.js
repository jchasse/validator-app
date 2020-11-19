import React from 'react'

import ListingsContainer from './containers/ListingsContainer'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container class="col-md-6">
          <ListingsContainer />
        </Container>

      </div>
    )
  }
}

export default App