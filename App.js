import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import { Text } from 'react-native';

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);  // Initially null for the first check
  const [loading, setLoading] = useState(true);  // Loading state to indicate the async check is happening

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const firstLaunch = await AsyncStorage.getItem('hasLaunched');
        console.log("First Launch Check:", firstLaunch); // Log the result
        if (firstLaunch === null) {
          // First launch: set the state to true and store it in AsyncStorage
          setIsFirstLaunch(true);
          await AsyncStorage.setItem('hasLaunched', 'true');
        } else {
          // Not the first launch: set the state to false
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      } finally {
        setLoading(false);  // Once check is done, set loading to false
      }
    };

    checkFirstLaunch();
  }, []);

  // If loading, show a loading indicator or placeholder
  if (loading) {
    return <Text>Loading...</Text>;  // Or any other loading indicator you prefer
  }

  // After loading is complete, decide which screen to show
  return (
    <NavigationContainer>
      {isFirstLaunch === false ? (
        <OnboardingScreen />  // Show Onboarding if it's the first launch
      ) : (
        <Navigation />  // Show the main navigation if not the first launch
      )}
    </NavigationContainer>
  );
}