import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'

import constants from '../../controller/constants'
import CommonAPIs from '../../controller/APIs/CommonAPIs'
import CategoriesSelect from './CategoriesSelect'

const Categories = () => {
    const [dataAllCategory, setDataAllCategory] = useState([])
    const [dataSelect, setDataSelect] = useState([])
    const [selected, setSelected] = useState(0)
    const [nameCategorySelect, setNameCategorySelect] = useState()

    const getAllCategory = () => {
        CommonAPIs.allCategory()
            .then((res) => {
                setDataAllCategory(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    const showCategories = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    ...styles.buttonCategory,
                    backgroundColor:
                        selected == item.id ? constants.color.darkBlue : constants.color.gray
                }}
                onPress={() => {
                    setSelected(item.id)
                    setNameCategorySelect(item.parent_name)
                    CommonAPIs.category(item.id)
                        .then((res) => {
                            setDataSelect(res.data)
                        })
                        .catch((err) => {
                            alert(err.message)
                        })
                }}
            >
                <Image style={styles.icCategory} source={{ uri: item.icon_parent }} />
                <Text
                    style={{
                        ...styles.titleCategory,
                        color:
                            selected == item.id ? constants.color.white : constants.color.darkBlue
                    }}
                >
                    {item.parent_name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.categories}>
                <TouchableOpacity
                    style={{
                        ...styles.buttonCategory,
                        backgroundColor:
                            selected == 0 ? constants.color.darkBlue : constants.color.gray
                    }}
                    onPress={() => {
                        setSelected(0)
                    }}
                >
                    <Text
                        style={{
                            ...styles.titleCategory,
                            marginLeft: 10,
                            color: selected == 0 ? constants.color.white : constants.color.darkBlue
                        }}
                    >
                        All
                    </Text>
                </TouchableOpacity>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dataAllCategory}
                    renderItem={showCategories}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <CategoriesSelect name={nameCategorySelect} dataSelect={dataSelect} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
        marginLeft: 15,
        width: 20,
        height: 20
    }
})

export default Categories
