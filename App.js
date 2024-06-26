import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import Signup from './src/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}


  

