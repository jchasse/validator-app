import React from 'react'
import {Modal} from 'react-bootstrap'
import LoginToggle from './LoginToggle'

export default function LoginModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Welcome to BiZinder
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <LoginToggle />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}

      </Modal>
    )
}