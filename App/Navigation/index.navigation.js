import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { GetTabIcon } from '../Utils/navigation.utils';
import { Colors } from '../Constants/theme.constants';

//Import Screens

//Tabs
import HomeScreen from '../Screen/Home-Screen/home.screen';
import SearchScreen from '../Screen/Search-Screen/search.screen';
import OrdersScreen from '../Screen/Orders-Screen/orders.screen';
import AcctountScreen from '../Screen/Account-Screen/account.screen';

//Stack
import ResolveLocaitonScreen from '../Screen/Resolve-Location-Screen/resolveLocation.screen';
import ResolveApp from '../Screen/Resolve-App-Screen/resolveApp.screen';
import OnBoardingScreen from '../Screen/OnBoarding-Screen/onBoarding.screen';
import LoginScreen from '../Screen/Login-Screen/login.screen';
import VerifyMobileNumberScreen from '../Screen/Verify-Mobile-Number-Screen/verifyMobileNumber.screen';
import SetupAccountScreen from '../Screen/Setup-Account-Screen/setupAccount.screen';
import SavedAddressesScreen from '../Screen/Saved-Addresses-Screen/savedAddresses.screen';
import RestaurantScreen from '../Screen/Restaurant-Screen/restaurant.screen';

const TabNavigator = createBottomTabNavigator(
    {
        Order: { screen: HomeScreen },
        Search: { screen: SearchScreen },
        Orders: { screen: OrdersScreen },
        Account: { screen: AcctountScreen },
    },
    {
        initialRouteName: 'Order',
        order: ['Order', 'Search', 'Orders', 'Account'],
        backBehavior: 'initialRoute',
        lazy: true,
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

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
        ResolveApp: {
            screen: ResolveApp,
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
                    elevation: 0,
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
        SetupAccount: {
            screen: SetupAccountScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Colors.Surface,
                    zIndex: 0,
                    elevation: 0
                },
            }
        },
        SavedAddresses: {
            screen: SavedAddressesScreen,
            navigationOptions: {
                title: 'Saved Addresses',
                headerStyle: {
                    backgroundColor: Colors.Surface,
                    zIndex: 0,
                    elevation: 0
                },
            }
        },
        ResolveLocaiton: {
            screen: ResolveLocaitonScreen,
            navigationOptions: {
                header: null
            }
        },
        Restaurant: {
            screen: RestaurantScreen,
            navigationOptions: {
                header: null
            }
        },
        SearchFood: {
            screen: SearchScreen,
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
        initialRouteName: 'ResolveApp'
    }
)

export default createAppContainer(RootNavigator);