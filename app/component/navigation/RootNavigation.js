import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import 'react-native-gesture-handler'

import RegisterScreen from '../auth/Register'
import ConfirmPassScreen from '../auth/ConfirmPass'
import VerificationScreen from '../auth/Verification'
import LoginScreen from '../auth/Login'
import TabNavigation from './TabNavigation'

const Stack = createStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='RegisterScreen'
            screenOptions={{
                headerTintColor: 'red',
                headerStyle: {
                    height: 120
                },
                headerTitleStyle: {
                    fontSize: 30
                },
                headerShown: false
            }}
        >
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='VerificationScreen' component={VerificationScreen} />
            <Stack.Screen name='ConfirmPassScreen' component={ConfirmPassScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default RootNavigation
