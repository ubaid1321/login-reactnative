import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { darkGreen } from './Constants'

export default function Field(props){
  return (
    <TextInput {...props} style={{borderRadius:100,color:darkGreen,paddingHorizontal:10,width:"80%",backgroundColor:"rgb(220,220,220)",marginVertical:10,paddingVertical:10}} placeholderTextColor={darkGreen}/>
    )
}
const styles = StyleSheet.create({})