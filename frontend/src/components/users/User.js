import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {deleteUser} from '../../actions/users'

function User(props) {

    const handleOnDelete = () => {
        props.deleteUser(props.user.id)
        props.history.push('/users')
      }

    const handleOnEdit = () => {
        props.history.push(`/users/${props.user.id}/edit`)
    }

    return (
        <>
            <Card>
                <Card.Body> 
                    <Card.Title> {props.user && props.user.fname} {props.user && props.user.lname}  </Card.Title>  
                    <Card.Text> Mobile: {props.user && props.user.mobile} </Card.Text>
                    <Card.Text> Email: {props.user && props.user.email} </Card.Text>
                    <Button className="float-right" variant="danger" size="sm" onClick={ () => handleOnDelete()}> <FontAwesomeIcon icon={faTrash} /> </Button>
                    <Button className="float-right" variant="secondary" size="sm" onClick={ () => handleOnEdit()} ><FontAwesomeIcon icon={faEdit} /></Button>
                </Card.Body>   
            </Card>
        </>
    )
}
export default withRouter(connect(null, {deleteUser})(User))