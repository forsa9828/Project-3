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
        message: ""
    }

    onValueChange=(value) =>{
        this.setState(value)
    }

    checkEmail =() => {
        const {email} = this.state;
        console.log(email)

         const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/

        if(checkEmail.test(email)){
            console.log("good")
            // this.setState(
            //     {message: ""}
            // )
        }else{
           console.log("not good")
           Alert.alert("check your email again")
            // this.setState(
            //     {message: "Enter valid email"}
            // )
    }


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
       
        //trying to loop through the object 
        // for (const property in this.state){
        //     console.log((`${property}: ${this.state[property]}`))
    
        // //    show which fields is missing information 
        //      if(this.state[property] == ""){
        //              const missingMsg= "please enter missing fields of:" +
        //              `${property}` 
    
        //             Alert.alert(missingMsg) 
        //      }
        //     else{
        //         console.log(this.state[property])
        //     }
        // }
        // API.authUser({
        //     firstname,
        //     lastname,
        //     email,
        //     password,
        //     employmentType,
        //     phone,
        //     emergencyContact,
        //     emergencyContactPhone
        // })
        // .then(res=> console.log(res.data))
        // .catch(error => console.log(error))
    
      
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
                checkEmail={this.checkEmail}
                onValueChange={this.onValueChange}
                clicked={this.signUpSubmit}


            />
        )
    }




}

export default SignUp;