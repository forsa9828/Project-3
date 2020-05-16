import {mainStyleSheet} from 'react-native'

/*background and font*/
const styles = StyleSheet.create({
body: {
    font: 'Montserrat',
    fontSize: 14,
    //backgroundImage: ''
},

title: {
    fontSize: 65,
    color: 'black',
    font: 'Playfair Display', 
},

subtitle: {
    fontSize: '18',
    color: 'd6ad86',
    font: "Montserrat",
},
/**************** POSITIONING ON LANDING PAGE  ****************/

// .banner_part .banner_text {
//     display: table;
//     width: 100%;
//     height: 1080px;
//     padding-top: 40px;
// }

// .banner_part .banner_text .banner_text_iner {
//     display: table-cell;
//     vertical-align: middle;
// }

/**************** FOOTER ****************/
footer: {
    backgroundColor: 'd6ad86',
    justifyContent: 'center',
    alignItems: 'center',
},
    
footertext: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
}

});

/**************** BUTTON ****************/


const button = styleSheet.create ({
 button: {
    display: 'inline-block',
    backgroundColor: '#d6ad86',
    fontSize: 14,
    color: 'white',
    textTransform: 'capitalize',
},

hover: {
    color: 'white',
    backgroundColor: 'ffb830',
}
})


export { styles, button}
