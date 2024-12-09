import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import OnboardingScreen2 from './screens/onboarding/OnboardingScreen2';

const OnboardingStack = createNativeStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      {/* Ensure that each screen is inside a Screen component */}
      <OnboardingStack.Screen 
        name="Welcome1" 
        component={OnboardingScreen} 
        options={{ title: 'Welcome Screen 1' }} 
      />
      <OnboardingStack.Screen 
        name="Welcome2" 
        component={OnboardingScreen2} 
        options={{ title: 'Welcome Screen 2' }} 
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingStackNavigator;
