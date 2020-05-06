import React, {Component} from "react";
import {FormSignUp} from "../component/Form";
import API from "../utils/API";

class SignUp extends Component {
    state= {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        employmentType: "",
        phone: "",
        emergencyContact: "",
        emergencyContactPhone: ""

    }

    onValueChange=(value) =>{
        // console.log(value)
        this.setState(
           value
        , function(){ console.log(this.state)})
    }

    signUpSubmit=(event) => {
        event.preventDefault();
        const {
            firstname,
            lastname,
            email,
            password,
            employmentType,
            phone,
            emergencyContact,
            emergencyContactPhone
        } = this.state;
        API.authUser({
            firstname,
            lastname,
            email,
            password,
            employmentType,
            phone,
            emergencyContact,
            emergencyContactPhone
        })
        .then(res=>console.log(res.data))
        .catch(error => console.log(error))
}


    render() {
        return(
            <FormSignUp 
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                email={this.state.email}
                password={this.state.password}
                employmentType={this.state.employmentType}
                phone={this.state.phone}
                emergencyContact={this.state.emergencyContact}
                emergencyContactPhone={this.state.emergencyContactPhone}
                onValueChange={this.onValueChange}
                clicked={this.signUpSubmit}
            />
        )
    }
}

export default SignUp;