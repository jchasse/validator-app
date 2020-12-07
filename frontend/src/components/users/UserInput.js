import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Form, Card, Button, Col} from 'react-bootstrap'
// import PhoneInput from 'react-phone-number-input/input'
// import {phoneUtil} from 'google-libphonenumber'
// import IntlTelInput from 'react-bootstrap-intl-tel-input'

import {addUser, editUser} from '../../actions/users'


class UserInput extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            password: '',
            password_confirmation: ''
}}

    // validateMobile = () => {
    //     phoneUtil.isValidNumberForRegion(phoneUtil.parse('202-456-1414', 'US'), 'US');
    // }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
        
    handleOnSubmit(event) {
        event.preventDefault()
        if (!this.props.user) {
            this.props.addUser(this.state)
        } else {
            this.props.editUser(this.state)
        }
        this.setState({
            id: '',
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            password: '',
            password_confirmation: ''
        })
        // this.props.history.push(`/listings/${this.state.id}`)
        // this.props.history.push(`/listings`)
    }

    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        if (this.props.user){ 
            this.setState({
                ...this.props.user
            })
        }
        // this.props.user? this.setState({...this.props.user}) : null
    }

    componentDidUpdate(prevProps) {
        console.log("COMPONENT DID UPDATE")
        if (prevProps !== this.props){ 
            this.setState({
                ...this.props.user
            })
        }
    }

    render() {
        const editOrSubmit = () => !this.props.user ? 'Submit' : 'Update'
        
        return (
            <>
                <Card border="dark" bg="dark">
                    <Card.Body>
                        <Form onSubmit={(event) => this.handleOnSubmit(event)}> 
                            <Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridfName">
                                        <Form.Control name="fname" type="text" value={this.state.fname} placeholder="First Name" onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridLName">
                                        <Form.Control name="lname" type="text" value={this.state.lname} placeholder="Last Name" onChange={(event) => this.handleOnChange(event)} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Control name="email" type="text" value={this.state.email} placeholder="Email" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>
                                <Form.Group controlId="formGridmobile">
                                        <Form.Control name="mobile" type="tel" value={this.state.mobile} placeholder="Mobile Phone Number" onChange={(event) => this.handleOnChange(event)} />
                                        {/* <PhoneInput name="mobile" country="US" placeholder="Mobile Phone Number" value={this.state.mobile} onChange={(event) => this.handleOnChange(event)}/> */}
                                        {/* <IntlTelInput inputClassName="form-control" name="mobile" value={this.state.mobile} preferredCountries={['US', 'GB']} defaultCountry={'US'} defaultValue={'+1 555-555-5555'} onChange={(event) => this.handleOnChange(event)} /> */}
                                </Form.Group>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>
                                <Form.Group controlId="formGroupPasswordConfirm">
                                    <Form.Control name="password_confirmation" type="password" value={this.state.password_confirmation} placeholder="Password Confirmation" onChange={(event) => this.handleOnChange(event)} />
                                </Form.Group>
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long.
                                </Form.Text>                             
                                <Button className="float-right" variant="outline-light" size="sm" type="submit"> {editOrSubmit()} </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>                
            </>
        )
    }
}

export default withRouter(connect(null, {addUser, editUser})(UserInput))