import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { GetTabIcon } from '../Utils/navigation.utils';
import { Colors } from '../Constants/theme.constants';

//Import Screens
import HomeScreen from '../Screen/Home-Screen/home.screen';

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Search: HomeScreen,
        Orders: HomeScreen,
        Account: HomeScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                // You can return any component that you like here!
                return <MDI name={GetTabIcon(routeName)} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: Colors.Primary,
            inactiveTintColor: Colors.Devider,
        },
    }
);

export default createAppContainer(TabNavigator);