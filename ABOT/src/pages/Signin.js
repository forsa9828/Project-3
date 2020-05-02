//nothing new to add
import React, { Component } from "react";
import {FormSignUp, FormLogin} from "../component/Form";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      


    render() {
        return(
            <FormLogin
                email={this.setState.email}
                password={this.setState.password}
                onChange={this.handleInputChange}
            />
        )
    }
}

export default SignIn;