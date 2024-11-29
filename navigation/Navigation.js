import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';
import PlanningMealsScreen from '../screens/Main/PlanningMealsScreen';
import AddRecipeScreen from '../screens/Main/AddRecipeScreen'
import GroceriesListScreen from '../screens/Main/GroceriesListScreen';
import RecipesScreen from '../screens/Main/RecipesScreen';




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
      <Stack.Screen name="AddRecipe" component={AddRecipeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GroceriesList" component={GroceriesListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RecipiesScreen" component={RecipesScreen} options={{ headerShown: false }} />
      
      
      



    </Stack.Navigator>
  );
};

export default Navigation;
