import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { GetTabIcon } from '../Utils/navigation.utils';
import { Colors } from '../Constants/theme.constants';

//Import Screens
import HomeScreen from '../Screen/Home-Screen/home.screen';
import ResolveLocaitonScreen from '../Screen/Resolve-Location-Screen/resolveLocation.screen';
import App from '../Screen/Resolve-App-Screen/resolveApp.screen';
import OnBoarding from '../Screen/OnBoarding-Screen/onBoarding.screen';

const TabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Search: { screen: ResolveLocaitonScreen },
        Orders: { screen: HomeScreen },
        Account: { screen: HomeScreen },
    },
    {
        initialRouteName: 'Home',
        order: ['Home', 'Search', 'Orders', 'Account'],
        backBehavior: 'initialRoute',
        lazy: true,
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
            allowFontScaling: false
        },
    }
);

const RootNavigator = createStackNavigator(
    {
        App: {
            screen: App,
            navigationOptions: {
                header: null,
            }
        },
        OnBoarding: {
            screen: OnBoarding,
            navigationOptions: {
                header: null
            }
        },
        Tabs: {
            screen: TabNavigator,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'App'
    }
)

export default createAppContainer(RootNavigator);