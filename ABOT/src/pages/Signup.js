import React, {Component} from "react";
import {FormSignUp} from "../component/Form";

class SignUp extends Component {
    state= {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        position: ""
    }

    

    render() {
        return(
            <FormSignUp 
                firstName={this.setState.firstName}
                lastName={this.setState.lastName}
                email={this.setState.email}
                password={this.setState.password}
                position={this.setState.position}
            />
        )
    }
}

export default SignUp;