import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import Background from '../common/Background'
import Header from '../common/Header'
import constants from '../../controller/constants'
import Categories from '../common/Categories'
import CategoriesSpecial from '../common/CategoriesSpecial'

const foodRecomended = [
    {
        name: 'T-JAY SUSHI',
        img: require('../../assets/images/img_sushi.png'),
        star: '4.0'
    },
    {
        name: 'T-JAY CAFE',
        img: require('../../assets/images/img_cafe.png'),
        star: '3.0'
    },
    {
        name: 'T-JAY SUSHI 2',
        img: require('../../assets/images/img_sushi.png'),
        star: '4.0'
    },
    {
        name: 'T-JAY SUSHI 3',
        img: require('../../assets/images/img_sushi.png'),
        star: '4.0'
    }
]

const foodRestaurant = [
    {
        name: 'T-JAY SUSHI',
        img: require('../../assets/images/img_sushi2.png'),
        star: '4.0'
    },
    {
        name: 'T-JAY CAFE',
        img: require('../../assets/images/img_sushi3.png'),
        star: '2.0'
    },
    {
        name: 'T-JAY SUSHI 2',
        img: require('../../assets/images/img_sushi2.png'),
        star: '4.0'
    },
    {
        name: 'T-JAY SUSHI 3',
        img: require('../../assets/images/img_sushi2.png'),
        star: '4.0'
    }
]

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Background />
            <Header name={'HOME'} />
            <View style={styles.payment}>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Image source={constants.image.icScan} style={{ marginTop: 16.7 }} />
                    <Text style={styles.textPayment}>Scan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Image source={constants.image.icSend} style={{ marginTop: 16.7 }} />
                    <Text style={styles.textPayment}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Image source={constants.image.icReceive} style={{ marginTop: 16.7 }} />
                    <Text style={styles.textPayment}>Receive</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Categories />
                <CategoriesSpecial nameCategory={'Recomended Store'} items={foodRecomended} />
                <CategoriesSpecial nameCategory={'Restaurant'} items={foodRestaurant} />
                <CategoriesSpecial nameCategory={'Restaurant'} items={foodRestaurant} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonPayment: {
        backgroundColor: constants.color.backgroundBelow,
        width: 76,
        height: 76,
        shadowColor: constants.color.shadowBlack,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        elevation: 4,
        shadowRadius: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    payment: {
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 17
    },
    textPayment: {
        fontSize: 14,
        fontFamily: constants.font.fontMedium,
        marginTop: 7
    }
})

export default HomeScreen
