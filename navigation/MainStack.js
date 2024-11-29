import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/Main/HomeScreen';
import RecipesScreen from '../screens/Main/RecipesScreen';
import UpdateScreen from '../screens/Main/UpdateScreen';
import FavoriteScreen from '../screens/Main/FavoriteScreen';
import { Image } from 'react-native';




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
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            source={focused ? require('../assets/images/home.png') : require('../assets/images/home1.png')}
                            style={{ width: 25, height: 25, tintColor: color }} 
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={RecipesScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                    <Image
                        source={focused ? require('../assets/images/cuisine.png') : require('../assets/images/cuisine1.png')}
                        style={{ width: 30, height: 30, tintColor: color }} 
                    />
                    ),
                }}
                />
            <Tab.Screen
                name="Update"
                component={UpdateScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            source={focused ? require('../assets/images/editer.png') : require('../assets/images/editer1.png')}
                            style={{ width: 27, height: 27, tintColor: color }} 
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            source={focused ? require('../assets/images/favorite.png') : require('../assets/images/favorite1.png')}
                            style={{ width: 33, height: 35, tintColor: color }} 
                        />
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