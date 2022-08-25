import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const InputStyle = ({ name, value, onChange, style }) => {
    const [showPass, setShowPass] = useState(false)

    let obj = {
        placeholder: name,
        secureTextEntry: showPass,
        icon: <></>
    }

    switch (name) {
        case 'Confirm Password':
        case 'Password':
            obj.secureTextEntry = !showPass
            obj.icon = (
                <Icon
                    size={18}
                    color={'gray'}
                    name={showPass ? 'ios-eye' : 'ios-eye-off'}
                    onPress={() => setShowPass(!showPass)}
                />
            )
            break
        default:
            break
    }

    return (
        <View style={{ ...styles.container, ...style }}>
            <TextInput
                placeholder={obj.placeholder}
                style={styles.textInput}
                secureTextEntry={obj.secureTextEntry}
                value={value}
                onChangeText={(value) => onChange(value)}
            />
            <View style={styles.iconShowPass}>{obj.icon}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderRadius: 40,
        width: 285,
        height: 40,
        borderColor: constants.color.borderColor,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    textInput: {
        fontSize: 14,
        color: constants.color.textContent
    }
})

export default InputStyle
