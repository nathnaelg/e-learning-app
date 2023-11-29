import { View, Text, Image } from 'react-native'
import React from 'react'
import app from './../../assets/images/app.png'
import google from './../../assets/images/Google.png'
import Colors from '../Utils/Colors'
import { TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Image source={app}
        style={{width: 
        250,height:500,
        objectFit:'contain', marginTop: 50}}
      />

      <View style={{
        height:500,
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        marginTop:-160,
        padding: 20
      }}>
        <Text></Text>
        <Text style={{textAlign: 'center',
    fontSize:35,
    fontWeight: 'bold',
    marginTop: 50,
    color:Colors.WHITE}}>CodeBox</Text>

    <Text style={{fontSize:26,
    color:Colors.LIGHT_PRIMARY,
    fontWeight: '100',
    marginTop: 25,
    textAlign: 'center'}}>Your Ultimate Programming Learning Box</Text>

    <TouchableOpacity 
    onPress={(onPress)}
    
    style={{marginTop:50,
    backgroundColor:Colors.WHITE,
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    gap:15,
    justifyContent: 'center',
    padding: 10,
    borderRadius:99}}> 
      <Image source={google} style={{width: 40, height: 40}}/>
      <Text style={{color: Colors.PRIMARY, 
        fontFamily: 'outfit-Medium',
        fontSize: 20}}>Login with Google</Text>
    </TouchableOpacity>

      </View>
    </View>
  )
}