//nothing new to add
import React, { Component } from "react";
import {FormLogin} from "../component/Form";
import API from "../utils/API";
import {Alert, Stylesheet, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import SchedulePage from "./SchedulePage";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        emailMsg: "",
        pswdMsg:"",
        isLoggedIn: false,
        userToken: ""
    }

    onValueChange= (value) => {
        this.setState(value)
    }

    //this is method allows to go to forgotPassword screen
    forgotPassword =() =>{
        this.props.navigation.navigate("ForgotPassword")
    }

    //this method will allow to go to sign up screen
    goToSignUp=() =>{
        this.props.navigation.navigate("Signup")
    }

    

    signInSubmit = (event) => {
       
        //this.props.navigation.navigate('SchedulePage')
        
        event.preventDefault();  
        const {
            email,
            password,
            isLoggedIn
        } = this.state;

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
        //Alert.alert("info obtained!")
        //     console.log("good to go!")
        
            this.setState({pswdMsg: ""});

            API.logIn({
                email,
                password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            }
        })
    //     //have if for if user name and password matches db

    //     //then changed loggedin to true then go to nav page  
    //    //.then(//need token here 
        .then((response) => { //res from server
            //if passport take us to next route = successful
             if(!response){
                console.log("none")
            }
            else{
                console.log("good to go")
                let isLoggedIn = true;
                this.setState({isLoggedIn})
                console.log(isLoggedIn)

                // goToSchedulePage =({navigation})=>{
                //     navigation.navigate("SchedulePage")
                // }
            
            }
           
        }) //will show a catch error if user doesn't exist in db
         .catch((error) => {
         console.log(error)
         //Alert.alert("Oh no! Something went wrong. If you believe this is an error, reach out to your manager.")
         })  
         }

        
         //now need to get user info and pass it 
         
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
                forgotPassword={this.forgotPassword}
                goToSignUp={this.goToSignUp}
           />

           
        )}
}
export default SignIn;


