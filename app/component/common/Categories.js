import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import constants from '../../controller/constants'

const categorys = [
    {
        id: 1,
        name: 'All',
        type: 'All'
    },
    {
        name: 'Restaurant',
        img: require('../../assets/images/ic_restaurant.png'),
        type: 'Restaurant'
    },
    {
        id: 2,
        name: 'Fashion',
        img: require('../../assets/images/ic_fashion.png'),
        type: 'Fashion'
    },
    {
        id: 3,
        name: 'Car',
        img: require('../../assets/images/ic_car.png'),
        type: 'Car'
    },
    {
        id: 4,
        name: 'Fashion2',
        img: require('../../assets/images/ic_car.png'),
        type: 'Fashion2'
    },
    {
        id: 5,
        name: 'Fashion3',
        img: require('../../assets/images/ic_car.png'),
        type: 'Fashion3'
    }
]

const Categories = () => {
    const [selected, setSelected] = useState([0])
    const showCategories = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    ...styles.buttonCategory,
                    backgroundColor:
                        selected.name == item.type ? constants.color.darkBlue : constants.color.gray
                }}
                onPress={() => {
                    setSelected(item)
                }}
            >
                {item.name == 'All' ? (
                    <View style={{ marginLeft: 10 }}></View>
                ) : (
                    <Image style={styles.icCategory} source={item.img} />
                )}
                <Text
                    style={{
                        ...styles.titleCategory,
                        color:
                            selected.name == item.type
                                ? constants.color.white
                                : constants.color.darkBlue
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.categories}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={categorys}
                renderItem={showCategories}
                keyExtractor={(item) => item.name.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCategory: {
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    categories: {
        flexDirection: 'row',
        marginTop: 27.6,
        marginHorizontal: 18.5
    },

    titleCategory: {
        fontFamily: constants.font.fontRubik,
        fontSize: 13,
        paddingRight: 15,
        color: constants.color.darkBlue,
        marginLeft: 4,
        paddingVertical: 7
    },
    icCategory: {
        marginLeft: 15
    }
})

export default Categories
