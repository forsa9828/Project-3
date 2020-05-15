import React, {Component} from "react";
import {FormSignUp} from "../component/Form";
import API from "../utils/API";
import {Alert, View} from "react-native";

class SignUp extends Component {
    state= {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        employmentType: "",
        phone: "",
        emergencyContact: "",
        emergencyContactPhone: "",
        emailMsg: "",
        nameMsg: "",
        lastNameMsg: "",
        pswdMsg: "",
        employMsg: "",
        emerConMsg: "",
        phoneMsg: "",
        emerPhoneMsg: ""
    }

    onValueChange=(value) =>{
        this.setState(value)
    }

    
    signUpSubmit=(event) => {
        event.preventDefault();
        const {
            firstName,
            lastName,
            email,
            password,
            employmentType,
            phone,
            emergencyContact,
            emergencyContactPhone
        } = this.state;
        console.log(firstName, lastName)

        const inputRegEx = /^[A-Za-z-\s ]{1,20}$/;

        const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

        // 8 to 10 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
        const passwordRegEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;
        

        if(!inputRegEx.test(firstName)){
            console.log(firstName)
            this.setState({
                nameMsg: "Enter first name"
            })
        
       }else if(!inputRegEx.test(lastName)){
           console.log(lastName)
            this.setState({
                nameMsg: "",
                lastNameMsg: "Enter last name"
                
            })
        // }else if(!checkEmail.test(email)){
        //     this.setState({
        //         lastNameMsg:"",
        //         emailMsg: "Enter valid email"
        //     })
        //  }else if(!passwordRegEx.test(password)){
        //      console.log("no good")
        //     this.setState({
        //         emailMsg: "",
        //         pswdMsg: "Password must have: 8-10 characters. a lowercase letter, an uppercase letter, one numeric digit, and one special character"

        //     })
        // }else if(employmentType == ""){
        //     console.log(employmentType)
        //     this.setState({
        //         pswdMsg:"",
        //         employMsg: "Please select one"
        //     })
        // }else if(phone.length != 10){
        //     this.setState({
        //         employMsg: "",
        //         phoneMsg: "Enter a valid phone number"
        //     })
        // }else if(!inputRegEx.test(emergencyContact)){
        //     this.setState({
        //         phoneMsg: "",
        //         emerConMsg: "Enter Your Emergency Contact"
        //     })
        //  }else if(emergencyContactPhone.length != 10){
        //     this.setState({
        //         emerConMsg:"",
        //         emerPhoneMsg: "Enter a valid phone number"
        //     })
        }else{
           
            this.setState({
                emailMsg: "",
                nameMsg: "",
                lastNameMsg: "",
                pswdMsg: "",
                employMsg: "",
                emerConMsg: "",
                phoneMsg: "",
                emerPhoneMsg: ""
            });
          
              API.authUser({
                firstName,
                lastName,
                email,
                password,
                employmentType,
                phone,
                emergencyContact,
                emergencyContactPhone
            })
            //handle the response
            .then(res => {
                if(res){
                Alert.alert("Info added!")
                }
                else{
                    console.log("can't add info")
                }
            }
            // .then(
            //     this.setState({
            //         firstname: "",
            //         lastname: "",
            //         email: "",
            //         password: "",
            //         employmentType: "",
            //         phone: "",
            //         emergencyContact: "",
            //         emergencyContactPhone: "",
            //     })
            )
            .catch(error => console.log(error))
            //add here logic if user does not exist 
            
            
           }
}


    render() {
      
        return(
            <FormSignUp 
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                password={this.state.password}
                employmentType={this.state.employmentType}
                phone={this.state.phone}
                emergencyContact={this.state.emergencyContact}
                emergencyContactPhone={this.state.emergencyContactPhone}
                nameMsg={this.state.nameMsg}
                lastNameMsg={this.state.lastNameMsg}
                emailMsg={this.state.emailMsg}
                pswdMsg={this.state.pswdMsg}
                emerConMsg={this.state.emerConMsg}
                emerPhoneMsg={this.state.emerPhoneMsg}
                phoneMsg={this.state.phoneMsg}
                employMsg={this.state.employMsg}
                onValueChange={this.onValueChange}
                clicked={this.signUpSubmit}
            />
          
        )
    }





}

export default SignUp;