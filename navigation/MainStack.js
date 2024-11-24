import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/Main/HomeScreen';
import RecipesScreen from '../screens/Main/RecipesScreen';
import UpdateScreen from '../screens/Main/UpdateScreen';
import FavoriteScreen from '../screens/Main/FavoriteScreen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#2A9D8F',
                tabBarInactiveTintColor: '#BDBDBD',
                tabBarLabelStyle: styles.tabLabel,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="grid" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={RecipesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="book" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Update"
                component={UpdateScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="edit-2" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="heart" size={22} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        paddingBottom: 8,
        paddingTop: 8,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 0,
    },
});

export default MainStackNavigator;