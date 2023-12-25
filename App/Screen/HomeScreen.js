import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor:Colors.PRIMARY, 
        height:362,
        width:'100%',
        padding:20}}>
      <Header/>
      </View>
      <View>
        <CourseList level= {'Basic'}/>
      </View>
    </View>
  )
}