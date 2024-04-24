import Background from "./Background";
import { darkGreen,green,white } from "./Constants";
import Btn from "./Btn";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home(props) {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: "white", fontSize: 64 }}>Let's start</Text>
        <Text style={{ color: "white", fontSize: 64,marginBottom:40  }}>coding</Text>
        <Btn bgColor={green} textColor="white" btnLabel="Login" Press={()=>props.navigation.navigate("Login")} />
        <Btn bgColor={white} textColor={darkGreen} btnLabel="Signup" Press={()=>props.navigation.navigate("Signup")}  />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({})
