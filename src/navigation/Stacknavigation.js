import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from'../screens/Homescreen';
import AboutUsScreen from '../screens/AboutUs';
import Technology from '../screens/Technology';
import QualityStatments from '../screens/QualityStatments';
import SEO from '../screens/SEO';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="About" component={AboutUsScreen} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Quality" component={QualityStatments} />
        <Stack.Screen name="SEO" component={SEO} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
