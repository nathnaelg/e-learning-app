import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';
import Colors from './App/Utils/Colors';
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Black.ttf'),
    'outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-ExtraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-ExtraLight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'outfit-Light': require('./assets/fonts/Outfit-Light.ttf'),
    'outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-SemiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-Thin': require('./assets/fonts/Outfit-Thin.ttf'),

  });
  return (
    <ClerkProvider publishableKey={"pk_test_bWVldC1jb2NrYXRvby02OS5jbGVyay5hY2NvdW50cy5kZXYk"}>

    <View style={styles.container}>
  
      <SignedIn>
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
});
