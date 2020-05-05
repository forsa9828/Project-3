import React, {Component} from "react";
import {FormSignUp} from "../component/Form";
import API from "../utils/API";

class SignUp extends Component {
    state= {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        position: ""
    }

    onValueChange=(value) =>{
        // console.log(value)
        this.setState(
           value
        , function(){ console.log(this.state)})
    }

formSubmit=(event) => {
    event.preventDefault();
    const {firstName, lastName , email, password, position} = this.state;
    API.authUser({firstName, lastName , email, password, position})
    .then(res=>console.log(res.data))
    .catch(error => console.log(error))
}


    render() {
        return(
            <FormSignUp 
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                password={this.state.password}
                position={this.state.position}
                onValueChange={this.onValueChange}
                clicked={this.formSubmit}
            />
        )
    }
}

export default SignUp;