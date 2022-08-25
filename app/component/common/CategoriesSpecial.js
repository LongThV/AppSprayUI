import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import constants from '../../controller/constants'

const CategoriesSpecial = ({ nameCategory, items }) => {
    const showItems = ({ item }) => {
        return (
            <TouchableOpacity style={styles.food}>
                <Image style={styles.icCategory} source={item.img} />
                {items.nameCategory == 'Recomended Store' ? (
                    <Image
                        source={require('../../assets/images/img_backgroundFood.png')}
                        style={styles.imgBackgroundFood}
                    />
                ) : (
                    <Image
                        source={require('../../assets/images/img_backgroundFood2.png')}
                        style={styles.imgBackgroundFood}
                    />
                )}

                <View style={styles.tittleFood}>
                    <Text style={styles.textFood}>{item.name}</Text>
                    <View style={styles.star}>
                        <Image source={require('../../assets/images/ic_star.png')} />
                        <Text style={styles.textFood}>{item.star}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.ContentSpecial}>
            <View style={styles.tittleSpecial}>
                <Text style={styles.textSpecial}>{nameCategory}</Text>
                <TouchableOpacity>
                    <Text style={styles.textSeeAllSpecial}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
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
        marginHorizontal: 18
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
    }
})

export default CategoriesSpecial
