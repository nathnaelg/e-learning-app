import { StyleSheet } from "react-native";
import Colors from '../../../Utils/Colors';

const styles = StyleSheet.create ({
    img: {width:50, 
      height:50
      },
  
      imgTOCoin:{
        width:35,
        height: 35
      },
  
      txtToWel:{
        color:Colors.WHITE,
        fontFamily:'outfit-Medium'
      },
  
    txtUSer:{
      color:Colors.WHITE,
        fontSize:15,
        fontFamily:'outfit-Medium'
      },
  
    mainText:{
      color:Colors.WHITE,
      fontSize:20,
      fontFamily: 'outfit'
    },
    rowStyle:{
      display:'flex',
      flexDirection: 'row',
      gap:10,
      alignItems: 'center',
    },

    searchContainer:{
      padding:3,
      backgroundColor: Colors.WHITE,
      width:350,
      display:'flex',
      flexDirection: 'row',
      borderRadius:99,
      justifyContent: 'space-between',
      marginTop:40,

      
    },
    searchTxt:{
     fontFamily:'outfit-Light',
    marginLeft:50,
     fontSize: 20,
    },

    title:{
      fontFamily: 'outfit-Bold',
      color:Colors.WHITE,
      fontSize:30,
      marginTop:50

    }
  })

export default styles;