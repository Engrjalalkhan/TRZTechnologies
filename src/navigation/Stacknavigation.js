import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from'../screens/Homescreen';
import AboutUsScreen from '../screens/AboutUs';
import Technology from '../screens/Technology';
import QualityStatments from '../screens/QualityStatments';
import SEO from '../screens/SEO';
import Projects from '../screens/Projects';
import Testimonails from '../screens/Testimonials';
import Contactscreen from '../screens/Contactscreen';

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
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Testimonials" component={Testimonails} />
        <Stack.Screen name="Contact" component={Contactscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
