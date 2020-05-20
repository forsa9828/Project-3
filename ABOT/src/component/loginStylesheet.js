import {Stylesheet} from 'react-native'


const login = StyleSheet.create({
  /* center of the page */
LoginContainter: {
    width: 100,  
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    backgroundColor: 'white',
  },
  
  /* Background  */
LoginBackground: {
    width: 500,
    borderRadius: 10,
    overflow: 'hidden',
    flex: 2,
    background: 'd6ad81',
    background: -webkit-linear-gradient(top, d69676, c76839),
    background: -o-linear-gradient(top, d69674, d67540),
    background: -moz-linear-gradient(top, d69679, b9652b),
    background: linear-gradient(top, d69676, d67544),
  },
  

  /* Login Title */
LoginTitle: {
    font: 'Poppins-Medium',
    fontSize: 30,
    color: 'white',
    lineHeight: 1.2,
    textAlign: 'center',
    display: 'flex',
},
  

/* FONT FOR EMAIL ECT */
InputText: {
    fontFamily: 'Poppins-Regular',
    src: url('../styles/fonts/Poppins-Regular.ttf'),
    fontSize: '16',
    color: 'white',
    lineHeight: 1.2,
    // display: block;
    width: 100,
    height: 45,
    background: 'transparent',
    flex: none

},

/* POSTION DROP DOWN STYLING */
PostionInput: {
    background: 'transparent',
    outline: 'none',
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Poppins-Regular', 
    fontSize: 14
  },

  /* linebox spacing */
BoxSpacing: {
    width: 100,
    position: 'relative',
    borderBottom: '2px solid rgba(255,255,255,0.24)',
    marginBottom: 30,
  }
}),

export {login}





/* format for hourglass icon */
// .login100-form-logo {
//     font-size: 60px; 
//     color: #333333;
  
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 120px;
//     height: 120px;
//     border-radius: 50%;
//     background-color: #fff;
//     margin: 0 auto;
//   }

//   a:focus {
//       outline: none !important;
//   }

//  /* Sign up Text Color */
//  input::-webkit-input-placeholder { color: #fff;}
//  input:-moz-placeholder { color: #fff;}
//  input::-moz-placeholder { color: #fff;}
//  input:-ms-input-placeholder { color: #fff;}

 /*-------FORM -----------------------*/

/*transparent box*/
//   input {
//     outline: none;
//     border: none;
// }

/* Alert Validation box */
// alert: {
// input:focus::-webkit-input-placeholder { color:transparent; }
// input:focus:-moz-placeholder { color:transparent; }
// input:focus::-moz-placeholder { color:transparent; }
// input:focus:-ms-input-placeholder { color:transparent; }
// },



/*-----text postioning ----------------------------------------*/ 
// textPostion: {
//     position: absolute;
//     display: block;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     pointer-events: none;
//   }


 /*---Button ------------------------------------------*/

 /* No outline */
//  button {
//     outline: none !important;
//     border: none;
//     background: transparent;
// }

// button:hover {
//     cursor: pointer;
// }

// /* postioning  */
// .container-login100-form-btn {
//     width: 100%;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -moz-box;
//     display: -ms-flexbox;
//     flex-wrap: wrap;
//     justify-content: center;
//     padding: 10px
//   }
  
//   /* Login ciricle */
//   .login100-form-btn {
//     font-family: Poppins-Medium;
//     font-size: 16px;
//     color: #555555;
//     line-height: 1.2;
  
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 20px;
//     min-width: 120px;
//     height: 50px;
//     border-radius: 25px;
  
  
//     background: #d6ad81;
//     background: -webkit-linear-gradient(top, #d69676, #c76839);
//     background: -o-linear-gradient(top, #d69676, #d67544);
//     background: -moz-linear-gradient(top, #d69676, #b9653b);
//     background: linear-gradient(top, #d69676, #d67544);
//     position: relative;
//     z-index: 1;
  
//     -webkit-transition: all 0.4s;
//     -o-transition: all 0.4s;
//     -moz-transition: all 0.4s;
//     transition: all 0.4s;
//   }
  
//   /* Log in circle white  */
//   .login100-form-btn::before {
//     content: "";
//     display: block;
//     position: absolute;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     border-radius: 25px;
//     background-color: #fff;
//     top: 0;
//     left: 0;
//     opacity: 1;
  
//     -webkit-transition: all 0.4s;
//     -o-transition: all 0.4s;
//     -moz-transition: all 0.4s;
//     transition: all 0.4s;
//   }
  
//   .login100-form-btn:hover {
//     color: #fff;
//   }
  

  
