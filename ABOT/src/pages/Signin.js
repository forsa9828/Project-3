//nothing new to add
import React, { Component } from "react";
import {FormLogin} from "../component/Form";
import API from "../utils/API";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    onValueChange= (value) => {
        this.setState(value, function(){
            console.log(this.state)
        })
    }

    signInSubmit = (event) => {
        event.preventDefault();  
        const {
            email,
            password
        } = this.state;
        API.renderSignin({
            email,
            password
        })
        .then(res => console.log("successful!" + res.data))
        .catch(error=> console.log(error))
    }

    render() {
        return(
            <FormLogin
                email={this.state.email}
                password={this.state.password}
                onValueChange={this.onValueChange}
                clickedIn={this.signInSubmit}
            />
        )
    }
}

export default SignIn;