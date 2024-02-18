import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import WelcomeScreen from './components/WelcomeScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{ 
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Log in"
          component={ LoginScreen }
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen 
          name="Sign up"
          component={ SignupScreen }
          options={{
            headerTitle: "Register",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={ WelcomeScreen }
          options={{
            headerTitle: "Profile",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;