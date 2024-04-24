import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen,white } from "./Constants";
import Field from "./Field";
import Btn from "./Btn";

export default function Singup(props) {
  return (
    <Background>
      <ScrollView>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 60,
          }}
        >
          Register
        </Text>
        <Text style={{color:'white',fontSize:16}}>
          Create a new Account
        </Text>
        <View>
          <View
            style={{
              backgroundColor: "white",
              height: 700,
              width: 400,
              borderTopLeftRadius: 130,
              paddingTop: 100,
              alignItems: "center",
            }}
          >
             <Field
              placeholder="Firstname"
             
            />
            <Field
              placeholder="Lastname"
             
            />
            <Field
              placeholder="Email"
              keyboardType={"email-address"}
            />
            <Field placeholder=" Password" secureTextEntry={true} />
            <Field placeholder="Confirm Password" secureTextEntry={true} />
             <View
              style={{ display:"flex",flexDirection:"row",alignItems: "center", width: "78%", paddingRight: 16,marginBottom:20 }}
            >

            <Text style={{color:"grey",fontWeight:'bold',fontSize:16}}>
                By singning in, you agree to our {" "}
            </Text>
            <Text style={{color:darkGreen,fontWeight:'bold',fontSize:16}}>
            Terms and conditions {" "}
            </Text>
            </View> 
            <View
              style={{ display:"flex",flexDirection:"row",justifyContent: "center", width: "78%", paddingRight: 16,marginBottom:10 }}
            >
              <Text style={{color:"grey",fontSize:16}}>and {' '}

              </Text>
              <Text style={{color:darkGreen,fontWeight:'bold',fontSize:16}}>Privacy Policy</Text>
              </View>
         <Btn textColor={white} bgColor={darkGreen} btnLabel="Singup" Press={()=>{
          alert("Account Created")
          props.navigation.navigate("Login")
         }}/>
             <View  style={{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:16,fontWeight:"bold"}}>
                <Text>Already Have an Account ? </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                <Text style={{color:darkGreen,fontWeight:"bold",fontSize:16}}>Login</Text>
             
                </TouchableOpacity>
                </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({});
