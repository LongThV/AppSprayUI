import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import constants from '../../controller/constants'

const CategoriesSelect = ({ name, dataSelect }) => {
    const showItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.food}>
                <Image style={styles.imgFood} source={{ uri: item.avatar }} />
                <Image
                    source={require('../../assets/images/img_backgroundFood.png')}
                    style={styles.imgBackgroundFood}
                />
                <View style={styles.tittleFood}>
                    <Text style={styles.textFood}>{item.name}</Text>
                    <View style={styles.star}>
                        <Image source={require('../../assets/images/ic_star.png')} />
                        <Text style={styles.textFood}>{item.rate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.ContentSpecial}>
            <View style={styles.tittleSpecial}>
                <Text style={styles.textSpecial}>{name}</Text>
                <TouchableOpacity>
                    <Text style={styles.textSeeAllSpecial}>See all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={dataSelect}
                renderItem={showItems}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tittleSpecial: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 23,
        alignItems: 'center'
    },
    ContentSpecial: {
        marginTop: 26,
        marginHorizontal: 18,
        flex: 1
    },
    food: {
        marginRight: 17
    },
    textSpecial: {
        fontSize: 16,
        fontFamily: constants.font.fontBold,
        color: constants.color.header
    },
    textSeeAllSpecial: {
        fontFamily: constants.font.fontRegular,
        fontSize: 14
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tittleFood: {
        position: 'absolute',
        bottom: 0,
        left: 16
    },
    textFood: {
        fontFamily: constants.font.fontBold,
        fontSize: 14,
        color: constants.color.white,
        marginLeft: 5
    },
    imgBackgroundFood: {
        position: 'absolute',
        opacity: 0.8,
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    imgFood: {
        width: 175,
        height: 175,
        borderRadius: 15
    }
})

export default CategoriesSelect
