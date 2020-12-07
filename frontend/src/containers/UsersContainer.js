import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import UserInput from '../components/users/UserInput'
import Users from '../components/users/Users'
import User from '../components/users/User'
import {fetchUsers, addUser, deleteUser, editUser} from '../actions/users'

class UsersContainer extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path='/users/new'>
                        <UserInput />    
                    </Route>
                    <Route exact path='/users/:id' render={ routerProps => <User 
                        {...routerProps} 
                        user={this.props.users.find( user => user.id === routerProps.match.params.id)} 
                        />} 
                    />
                    <Route exact path='/users/:id/edit' render={ routerProps => <UserInput 
                        {...routerProps} 
                        user={this.props.users.find( user => user.id === routerProps.match.params.id)}
                        />} 
                    />
                    <Route exact path='/users'>
                        <Users users={this.props.users} />   
                    </Route>
                </Switch>
            </>
        )
    }

    componentDidMount() {
        this.props.fetchUsers()
    }
}

const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps, {fetchUsers, addUser, deleteUser, editUser})(UsersContainer)