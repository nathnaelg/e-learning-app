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
  })

export default styles;