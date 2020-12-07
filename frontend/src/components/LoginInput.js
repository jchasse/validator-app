import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, Card, Button} from 'react-bootstrap'

import {loginUser} from '../actions/users'


class LoginInput extends Component {

    constructor() {
        super()
        this.state = {
            mobile: '',
            email: '',
            password: ''
    }}

    handleOnChange = event => this.setState({ [event.target.name]: event.target.value })
        
    handleOnSubmit(event) {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            mobile: '',
            email: '',
            password: ''
        })
        // close out the modal
    }

    render() {
        const editOrSubmit = () => !this.props.user ? 'Submit' : 'Update'
        
        return (
            <>
                <Card border="dark" bg="dark">
                    <Card.Body>
                        <Form onSubmit={(event) => this.handleOnSubmit(event)}> 
                            <Form.Group>
                                {/* <Form.Group controlId="loginGroupEmail">
                                    <Form.Control name="email" type="text" value={this.state.email} placeholder="Email" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group> */}
                                <Form.Group controlId="loginGroupmobile">
                                        <Form.Control name="mobile" type="tel" value={this.state.mobile} placeholder="Mobile Phone Number" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>
                                <Form.Group controlId="loginGroupPassword">
                                    <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>                          
                                <Button className="float-right" variant="outline-light" size="sm" type="submit"> {editOrSubmit()} </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>                
            </>
        )
    }
}

export default connect(null, {loginUser})(LoginInput)