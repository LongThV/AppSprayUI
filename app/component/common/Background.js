import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import constants from '../../controller/constants'

const Background = () => {
    return (
        <View style={styles.container}>
            <View style={styles.onBackground}>
                <Image source={constants.image.background} style={styles.img} />
            </View>
            <View style={styles.belowBackground}>
                <Image source={constants.image.imgSpray} style={styles.img2} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    onBackground: {
        width: constants.screen.width,
        height: constants.screen.height * (255 / 375),
        flex: 1
    },
    img: {
        width: '100%',
        height: '100%'
    },
    belowBackground: {
        flex: 2,
        height: '100%',
        width: '100%',
        backgroundColor: constants.color.backgroundBelow,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    img2: {
        width: 228,
        height: 44,
        marginBottom: 158
    }
})

export default Background
