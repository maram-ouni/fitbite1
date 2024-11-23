import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack'; // Ensure this path is correct
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="Main" component={MainStack} />
        </Stack.Navigator>
    );
};

export default Navigation;
