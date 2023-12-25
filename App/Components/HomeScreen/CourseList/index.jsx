import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../../Services'
import styles from './styles';

export default function CourseList({level}) {


  const [courseList,setCourseList]=useState([]);
    useEffect(()=>{
        getCourse();
    },[])
    const getCourse =()=>{
        getCourseList(level).then(resp=>{
            console.log("RESP--",resp);
            setCourseList(resp?.courses)
        })
    }
  return (
    <View>
      <Text style={styles.txt}>Basic Course</Text>
    </View>
  )
}