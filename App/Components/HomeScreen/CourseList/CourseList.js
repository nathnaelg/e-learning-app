import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getCourseList } from '../../../Services'

export default function CourseList({level}) {

    useEffect(()=>{
        getCourse();
    },[])
    const getCourse =()=>{
        getCourseList(level).then(resp=>{
            console.log("RESP--",resp);
        })
    }
  return (
    <View>
      <Text>Course List</Text>
    </View>
  )
}