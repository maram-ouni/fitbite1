import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';
import PlanningMealsScreen from '../screens/Main/PlanningMealsScreen';
import GroceriesListScreen from '../screens/Main/GroceriesListScreen';
import AddFoodScreen from '../screens/addfood/addfood1';
import AddFoodScreen2 from '../screens/addfood/addfood2';
import AddFoodScreen3 from '../screens/addfood/addfood3';




const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isFirstTime, setIsFirstTime] = useState(null);

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const value = await AsyncStorage.getItem('hasSeenOnboarding');
        if (value === null) {
          // If the value is null, it means it's the first time opening the app
          setIsFirstTime(true);
        } else {
          // If the value exists, onboarding has been completed
          setIsFirstTime(false);
        }
      } catch (e) {
        console.error('Error reading value from AsyncStorage', e);
        setIsFirstTime(false); // Default to false if there is an error
      }
    };

    checkFirstTime();
  }, []);

  if (isFirstTime === null) {
    // Show a loading screen or nothing while checking AsyncStorage
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={isFirstTime ? "Onboarding" : "Auth"}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
      <Stack.Screen name="PlanningMeals" component={PlanningMealsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GroceriesList" component={GroceriesListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="addfood" component={AddFoodScreen} options={{ headerShown: false }} />
      <Stack.Screen name="addfood2" component={AddFoodScreen2} options={{ headerShown: false }} />
      <Stack.Screen name="addfood3" component={AddFoodScreen3} options={{ headerShown: false }} />


      
      
      



    </Stack.Navigator>
  );
};

export default Navigation;
