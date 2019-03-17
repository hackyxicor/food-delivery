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
import OnBoardingScreen from '../Screen/OnBoarding-Screen/onBoarding.screen';
import LoginScreen from '../Screen/Login-Screen/login.screen';
import VerifyMobileNumberScreen from '../Screen/Verify-Mobile-Number-Screen/verifyMobileNumber.screen';
import AcctountScreen from '../Screen/Account-Screen/account.screen';
import OrdersScreen from '../Screen/Orders-Screen/orders.screen';

const TabNavigator = createBottomTabNavigator(
    {
        Order: { screen: HomeScreen },
        Search: { screen: ResolveLocaitonScreen },
        Orders: { screen: OrdersScreen },
        Account: { screen: AcctountScreen },
    },
    {
        initialRouteName: 'Account',
        order: ['Order', 'Search', 'Orders', 'Account'],
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
            screen: OnBoardingScreen,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Colors.Surface,
                    zIndex: 0,
                    elevation: 0
                },
            }
        },
        VerifyMobileNumber: {
            screen: VerifyMobileNumberScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Colors.Surface,
                    zIndex: 0,
                    elevation: 0
                },
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
        initialRouteName: 'Tabs'
    }
)

export default createAppContainer(RootNavigator);