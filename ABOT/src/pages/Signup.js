import React, {Component} from "react";
import {FormSignUp} from "../component/Form";
import API from "../utils/API";
import {Alert} from "react-native";
import ValidationComponent from "react-native-form-validator";


class SignUp extends ValidationComponent {
    state= {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        employmentType: "",
        phone: "",
        emergencyContact: "",
        emergencyContactPhone: "",
    
    }

    onValueChange=(value) =>{
        this.setState(value)
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
       
        // console.log(this.state.firstname)

        //trying to loop through the object 
        for (const property in this.state){
        //     // console.log((`${property}: ${this.state[property]}`))
    
        //     // show which field is missing information 
             if(this.state[property] == ""){
                     const missingMsg= "please enter missing fields of:" +
                     `${property}` 
    
                    Alert.alert(missingMsg)
             }
            else{
                console.log(this.state[property])
            }
        }
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
        .then(res=> console.log(res.data))
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