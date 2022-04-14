import React, {Component} from 'react';
import {AvField, AvForm} from 'availity-reactstrap-validation'
import {connect} from "dva";
import {Button} from "reactstrap";

@connect(({globalModel}) => ({globalModel}))
class Login extends Component {
    render() {
        const login = (e, v) => {
            this.props.dispatch({
                type: 'globalModel/login',
                payload: {
                    ...v
                }
            })
        }
        return (
            <div>
                <h1>Login page</h1>
                <AvForm onValidSubmit={login}>
                    <AvField name="phoneNumber" placeholder="phone number"/>
                    <AvField name="password" placeholder="Password"/>
                    <Button>Login</Button>
                </AvForm>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
