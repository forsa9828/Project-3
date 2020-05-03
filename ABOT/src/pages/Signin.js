//nothing new to add
import React, { Component } from "react";
import {FormSignUp, FormLogin} from "../component/Form";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return(
            <FormLogin
                email={this.setState.email}
                password={this.setState.password}
            />
        )
    }
}

export default SignIn;