import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen'; // Mettez le chemin correct
import OnboardingScreen2 from '../screens/onboarding/OnboardingScreen2'; // Assurez-vous que ce fichier existe
import OnboardingScreen3 from '../screens/onboarding/OnboardingScreen3'; // Et ainsi de suite...
import OnboardingScreen4 from '../screens/onboarding/OnboardingScreen4'; // Assurez-vous que ce fichier existe
import OnboardingScreen5 from '../screens/onboarding/OnboardingScreen5'; // Et ainsi de suite...

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="OnboardingScreen">
      <Stack.Screen 
        name="OnboardingScreen" 
        component={OnboardingScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="OnboardingScreen2" 
        component={OnboardingScreen2} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="OnboardingScreen3" 
        component={OnboardingScreen3} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="OnboardingScreen4" 
        component={OnboardingScreen4} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="OnboardingScreen5" 
        component={OnboardingScreen5} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
