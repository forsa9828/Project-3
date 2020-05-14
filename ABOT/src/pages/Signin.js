//nothing new to add
import React, { Component } from "react";
import {FormLogin} from "../component/Form";
import API from "../utils/API";
import {Alert, Stylesheet, Text} from "react-native";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        emailMsg: "",
        pswdMsg:""
    }

    onValueChange= (value) => {
        this.setState(value)
    }


    signInSubmit = (event) => {
        event.preventDefault();  
        const {
            email,
            password
        } = this.state;
        // console.log(this.state)

        //validation here
        const checkEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/

        if(!checkEmail.test(email)){
            this.setState(
                {
                    emailMsg: "Enter valid email",
                })
        } else if(password == ""){
            this.setState(
            {
                emailMsg: "",
                pswdMsg: "Enter your password"
            })
            console.log("nothing here")
        }else{
        Alert.alert("info obtained!")
        //     console.log("good to go!")
        
            this.setState({pswdMsg: ""});

            API.logIn({
            email,
            password
        })
        .then(res => console.log(res))
        .catch(error=> console.log(error))
         }
    }

    render() {
      
        return(
            <FormLogin
                email={this.state.email}
                password={this.state.password}
                onValueChange={this.onValueChange}
                clickedIn={this.signInSubmit}
                checkEmail={this.checkEmail}
                errEmail={this.state.emailMsg}
                errPswd={this.state.pswdMsg}
            />
       
         
        )
    }
}

export default SignIn;

