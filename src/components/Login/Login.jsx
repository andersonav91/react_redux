import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import "./Login.scss";
import { connect } from 'react-redux';
import { loginUserToStore } from '../../actions/user';

export class Login extends Component{

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: ""
            }
        };
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
        console.log(this.props.reducers);
        const dispatch = this.props.dispatch;
        this.props.dispatch(loginUserToStore(this.state.user));
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
function select(state) {
    return {
        reducers: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login);
