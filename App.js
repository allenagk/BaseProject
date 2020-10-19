import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from "./constants/colors";
//import { HeaderBackButton } from 'react-navigation';

import HomeScreen from "./screens/HomeScreen";
import FindLocation from "./screens/FindLocation";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '' }}
        />
        <Stack.Screen name="FindLocation" 
        component={FindLocation}
        options={{ 
          title: '', 
          }} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


//Navigation bar theme
const MyNavTheme = {
  //title: "Mission Reminder",
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    //fontWeight: "bold",
    color: '#fff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
