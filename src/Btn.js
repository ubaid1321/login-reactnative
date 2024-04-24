import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({bgColor,btnLabel,Press,textColor}) {
  return (
    <TouchableOpacity onPress={Press} style={{backgroundColor:bgColor, width:300,borderRadius:100,alignItems:"center",padding:10,marginVertical:10}}>
        <Text style={{color:textColor,fontSize:28,fontWeight:"bold"}}>{btnLabel}</Text>

    </TouchableOpacity>
  )
}