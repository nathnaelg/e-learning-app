import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
 
import Coin from './../../../assets/images/Coin.png'

export default function Header() {

    const {isLoaded,isSignedIn,user}=useUser();
  return isLoaded&&(
    <View style={{}}>
      <View style={{display:'flex',
      flexDirection:'row',
      gap: 10,
      alignItems: 'center'}}>
        <Image source={{uri:user?.imageUrl}}
        style={{width:50, height:50}}/>
        <View>
          <Text style={{color:Colors.WHITE,
          fontFamily:'outfit-Medium'}}>Welcome</Text>
          <Text style={{color:Colors.WHITE,
          fontSize:20,
          fontFamily:'outfit-Medium'}}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={{display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
}}>
            <Image source={Coin} style={{width:35,height: 35}}/>
            <Text style={{color:Colors.WHITE,
            fontFamily: 'outfit',
            fontSize:25}}>3856</Text>
      </View>
    </View>
  )
}