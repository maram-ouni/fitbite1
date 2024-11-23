import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/HomeScreen';
import RecipesScreen from '../screens/Main/RecipesScreen';
import AddRecipeScreen from '../screens/Main/AddRecipeScreen';
import GroceryListScreen from '../screens/Main/GroceryListScreen';

const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Recipes" component={RecipesScreen} />
            <Tab.Screen name="AddRecipe" component={AddRecipeScreen} />
            <Tab.Screen name="GroceryList" component={GroceryListScreen} />
        </Tab.Navigator>
    );
};

export default MainStackNavigator;
