import { View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './styles'
import Coin from '../../../../assets/images/Coin.png'


export default function Header() {

    const {isLoaded,isSignedIn,user}=useUser();
  return isLoaded&&(
    <View>
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
      </View >
      <View style={styles.searchContainer}>
        <TextInput placeholder='Search Courses' style={styles.searchTxt}/>
        <Ionicons name="search-circle" size={50} color="#65CFF2"/>
      </View>

      <View>
        <Text style={styles.title}>Basic Courses</Text>
      </View>
    </View>
  )
}

