import { color,size, View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeaderBoard from '../Screen/LeaderBoard';
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import Profile from '../Screen/Profile';
import { Ionicons, MaterialIcons,FontAwesome5,FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({color,size})=>(
            <Ionicons name="home" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="My Course" component={MyCourse} options={{
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="book-open" size={size} color={color}/>
        )
      }} />
      <Tab.Screen name="Leaderboard" component={LeaderBoard}options={{
        tabBarIcon:({color,size})=>(
            <MaterialIcons name="leaderboard" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:({color,size})=>(
            <FontAwesome name="user-circle-o" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}