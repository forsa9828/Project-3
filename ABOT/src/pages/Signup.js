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
        emergencyContactPhone: "",
        emailMsg: "",
        nameMsg: "",
        lastNameMsg: "",
        pswdMsg: "",
        emerConMsg: "",
        phoneMsg: "",
        emerPhoneMsg: ""
    }

    onValueChange=(value) =>{
        this.setState(value)
    }

    // checkEmail =() => {
    //     const {email} = this.state;
    //     console.log(email)

    //      const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/

    //     if(checkEmail.test(email)){
    //         this.setState({
    //             emailMsg: ""
    //         })
            
    //     }else{
    //        console.log("not good")
    //        this.setState({
    //         emailMsg: "Enter valid email"
    //     })
        
            
    //     }
    // }
   

    checkPass= () => {
        const {password} = this.state;
        console.log(password)
        // 8 to 10 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
        const passwordRegEx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/;
    
        if(passwordRegEx.test(password)){
            console.log("passed")
            this.setState({
                pswdMsg: ""
             })
        }else{
            console.log("not passed")
            this.setState({
                pswdMsg: "Password must have: 8-10 characters. a lowercase letter, an uppercase letter, one numeric digit, and one special character"
             })
        }
    }
    
    checkInput =() => {
        const {firstname, lastname, emergencyContact} = this.state;
        // console.log(firstname, lastname, emergencyContact)
       
        //1-20 characters, allows white space  and hypens btwn names
        const inputRegEx = /^[A-Za-z-\s ]{1,20}$/;
        
        //one at a time, msg will pop up 
        if(!inputRegEx.test(firstname)){
            this.setState({
                nameMsg: "Enter first name",
                lastNameMsg: ""
            })
        }
        else if(!inputRegEx.test(lastname)){
            this.setState({
                nameMsg: "",
                lastNameMsg: "Enter last name"
            })
        }
        else if(!inputRegEx.test(emergencyContact)){
            this.setState({
                nameMsg: "",
                lastNameMsg: "",
                emerConMsg: "Enter Your Emergency Contact"
            })
        }
        else{
            this.setState({
                nameMsg: "",
                lastNameMsg: "",
                emerConMsg: ""
            })
        }
    }

    checkPhone = () => {
        const {phone, emergencyContactPhone} = this.state;
       
        console.log(emergencyContactPhone)
        if(phone.length != 10){
            this.setState({
                phoneMsg: "Enter a phone number"
            })
        }else if(emergencyContactPhone.length != 10){
            this.setState({
                phoneMsg: "",
                emerPhoneMsg: "Enter a phone number"
            })
        }else{
            this.setState({
                phoneMsg: "",
                emerPhoneMsg: ""
            })
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

        //check if fields are empty 
        if(firstname == "" ||
            lastname  == "" ||
            email  == "" ||
            password  == "" ||
            employmentType  == "" ||
            phone  == "" ||
            emergencyContact == ""  ||
            emergencyContactPhone == "" ){
            Alert.alert("Please check your entries. Something is missing")
        }else{
            console.log("all good to go")
        }


        // API.authUser({
        //     firstname,
        //     lastname,
            //email,
           // password,
            //employmentType,
            //phone,
            //emergencyContact,
           // emergencyContactPhone
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
                // emergencyContact={this.state.emergencyContact}
                emergencyContactPhone={this.state.emergencyContactPhone}
                // checkEmail={this.checkEmail}
                // checkPswd={this.checkPass}
                // checkInput ={this.checkInput}
                // nameMsg={this.state.nameMsg}
                // lastNameMsg={this.state.lastNameMsg}
                // emailMsg={this.state.emailMsg}
                // pswdMsg={this.state.pswdMsg}
                // emerConMsg={this.state.emerConMsg}
                emerPhoneMsg={this.state.emerPhoneMsg}
                phoneMsg={this.state.phoneMsg}
                checkPhone={this.checkPhone}
                onValueChange={this.onValueChange}
                clicked={this.signUpSubmit}
            />
          
        )
    }





}

export default SignUp;