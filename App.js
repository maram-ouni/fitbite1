import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation'; 
import { Text } from 'react-native';

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);  // Always true as we don't need first launch logic anymore
  const [loading, setLoading] = useState(false);  // No need for async loading

  useEffect(() => {
    // Just simulate that onboarding is shown once, then you can switch to main navigation
    setLoading(false);  // No async check needed
  }, []);

  // If loading, show a loading indicator or placeholder
  if (loading) {
    return <Text>Loading...</Text>;  // Or any other loading indicator you prefer
  }

  return (
    <NavigationContainer>
      {/* Always show Onboarding once */}
      <Navigation isFirstLaunch={isFirstLaunch} />
    </NavigationContainer>
  );
}
