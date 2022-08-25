import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/Home'
import HistoryScreen from '../screens/History'
import ScanScreen from '../screens/Scan'
import ChargeScreen from '../screens/Charge'
import ProfileScreen from '../screens/Profile'
import constants from '../../controller/constants'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'ios-home' : 'ios-home-outline'
                            break
                        case 'History':
                            iconName = focused ? 'ios-timer' : 'ios-timer-outline'
                            break
                        case 'Charge':
                            iconName = focused ? 'ios-git-compare' : 'ios-git-compare-outline'
                            break
                        case 'Profile':
                            iconName = focused ? 'ios-person' : 'ios-person-outline'
                            break
                        default:
                            break
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: constants.color.textTabActive,
                tabBarInactiveTintColor: constants.color.textTabNoActive,
                tabBarStyle: {
                    backgroundColor: constants.color.backgroundBelow,
                    height: 70,
                    paddingBottom: 10
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontFamily: constants.font.fontMedium
                },
                headerShown: false
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name='History' component={HistoryScreen} options={{ title: 'Lịch sử' }} />
            <Tab.Screen
                name='Scan'
                component={ScanScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/images/img_scan.png')}
                            resizeMode='contain'
                            style={{ width: 80, height: 70, marginBottom: 30 }}
                        />
                    )
                }}
            />
            <Tab.Screen name='Charge' component={ChargeScreen} options={{ title: 'Charger' }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{ title: 'Thông tin' }} />
        </Tab.Navigator>
    )
}

export default TabNavigation
