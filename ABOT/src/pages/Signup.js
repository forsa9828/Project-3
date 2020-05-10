import React, {Component} from "react";
import {FormSignUp} from "../component/Form";
import API from "../utils/API";
import {Alert, View} from "react-native";

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
        this.setState(value)
    }

    // checkEmail =() => {
    //     const {email} = this.state;
    //     console.log(email)

    //      const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/

    //     if(checkEmail.test(email)){
    //         console.log("good")
            
    //     }else{
    //        console.log("not good")
    //        Alert.alert("check your email again")
            
    //     }
    // }
   

    // checkPass= () => {
    //     const {password} = this.state;
    //     console.log(password)
        //8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
    //     const passwordRegEx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
    //     if(passwordRegEx.test(password)){
    //         console.log("passed")
    //     }else{
    //         console.log("not passed")
    //     }
    // }
    
    // checkInput =() => {
    //     const {firstname, lastname, emergencyContact} = this.state;
    //     console.log(firstname, lastname, emergencyContact)
       
        //1-20 characters, allows white space  and hypens btwn names
        // const inputRegEx = /^[A-Za-z-\s ]{1,20}$/;
        
        //one at a time will pop up even, emergency contact though it's later down the list
        // if(!inputRegEx.test(firstname)){
        //     Alert.alert("need first name")
        // }
        // else if(!inputRegEx.test(lastname)){
        //     Alert.alert("need last name")
        // }
        // else if(!inputRegEx.test(emergencyContact)){
        //     Alert.alert("need emergency contact name")
        // }
        // else{
        //     console.log("good to go")
        // }

        //if just making sure text is entered, use this 
        // if(inputRegEx.test(firstname) && inputRegEx.test(lastname) && inputRegEx.test(emergencyContact)){
        //     console.log("all good")
        // }else{
        //     Alert.alert("Check if First name, Last name, and Contact Name has been entered")
        // }

    // }
   
    signUpSubmit=(event) => {
        event.preventDefault();
        const {
            firstname,
            lastname
        } =this.state;
        //     email,
        //     password,
        //     employmentType,
        //     phone,
        //     emergencyContact,
        //     emergencyContactPhone
        // } = this.state;
    
        API.authUser({
            firstname,
            lastname,
            //email,
           // password,
            //employmentType,
            //phone,
            //emergencyContact,
           // emergencyContactPhone
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
                // password={this.state.password}
                // employmentType={this.state.employmentType}
                // phone={this.state.phone}
                // emergencyContact={this.state.emergencyContact}
                // emergencyContactPhone={this.state.emergencyContactPhone}
                // checkEmail={this.checkEmail}
                // checkPswd={this.checkPass}
                // checkInput ={this.checkInput}
                onValueChange={this.onValueChange}
                clicked={this.signUpSubmit}
            />
          
        )
    }





}

export default SignUp;