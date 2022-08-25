import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './app/component/navigation/RootNavigation'

export default function App() {
    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <RootNavigation />
            </View>
        </NavigationContainer>
    )
}
