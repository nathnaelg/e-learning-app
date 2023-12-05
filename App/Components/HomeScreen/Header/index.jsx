import { View, Text, Image} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import styles from './styles'
import Coin from './../../../assets/images/Coin.png'

export default function Header() {

    const {isLoaded,isSignedIn,user}=useUser();
  return isLoaded&&(
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
      <View style={styles.rowStyle}>
        <Image source={{uri:user?.imageUrl}}
        style={styles.img}/>

        <View>
          <Text style={styles.txtToWel}>Welcome</Text>
          <Text style={styles.txtUSer}>{user?.firstName}</Text>
        </View>

      </View>
      <View style={styles.rowStyle}>
            <Image source={Coin} style={styles.imgTOCoin}/>
            <Text style={styles.mainText}>3856</Text>
      </View>
    </View>
  )
}

