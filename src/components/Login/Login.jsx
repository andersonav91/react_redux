import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import "./Login.scss";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUserToStore, setCurrentUserToStore } from '../../actions/user';

export class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: ""
            }
        };

        let currentUser = localStorage.getItem('currentUser');

        if(currentUser != null && currentUser != undefined){
            const { setCurrentUserToStore } = this.props;
            setCurrentUserToStore(JSON.parse(currentUser));
        }
    }

    validateForm() {
        return this.state.user.email.length > 0 && this.state.user.password.length > 0;
    }

    handleChange = event => {
        this.setState(
            {
                user: {
                    ...this.state.user, [event.target.id]: event.target.value
                }
            }
        );
    }

    handleLogin = event => {
        const { loginUserToStore } = this.props;
        loginUserToStore(this.state.user);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleLogin}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.user.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.user.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

// Subscribe State
function mapStateToProps(state) {
    return {
    };
}

const actionCreators = {
    loginUserToStore,
    setCurrentUserToStore
};

// actionCreators
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Login);
