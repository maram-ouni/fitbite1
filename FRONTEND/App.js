import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null); // null initially to determine if first launch
  const [loading, setLoading] = useState(true); // Loading state to handle async check

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const firstLaunch = await AsyncStorage.getItem("hasLaunched");
        if (firstLaunch === null) {
          // First launch, show onboarding and set the flag
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunched", "true");
        } else {
          // Not first launch, skip onboarding
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error checking first launch:", error);
      } finally {
        setLoading(false); // Set loading to false once check is complete
      }
    };

    checkFirstLaunch();
  }, []);

  // Show loading until the first launch check is complete
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Navigation isFirstLaunch={isFirstLaunch} />

    </NavigationContainer>
  );
}
