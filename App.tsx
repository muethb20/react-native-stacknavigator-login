import * as React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/home-screen/Home";
import ProductScreen from "./screens/product-screen/ProductScreen";


const Stack = createNativeStackNavigator();

function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home}/>
           <Stack.Screen name={'ProductScreen'} component={ProductScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;