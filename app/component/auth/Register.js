import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNProgressHud from 'progress-hud'

import Background from '../common/Background'
import constants from '../../controller/constants'
import CommonAPIs from '../../controller/api/CommonAPIs'

const validatePhone = (phone) => {
    if (phone.length < 9 || phone.length > 12) {
        return false
    }
    return true
}

const RegisterScreen = () => {
    const navigation = useNavigation()

    const [phone, setPhone] = useState('')

    const handOnClickRegister = () => {
        if (!phone) {
            Alert.alert('Thông báo', 'Vui lòng nhập mật khẩu')
            return
        } else if (!validatePhone(phone)) {
            Alert.alert('Thông báo', 'Số điện thoại không hợp lệ')
            return
        }

        RNProgressHud.showWithStatus('Loading...')

        CommonAPIs.register(phone)
            .then((res) => {
                navigation.navigate(constants.screenName.verification, {
                    accessToken: res.data.access_token,
                    phone
                })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
            .finally(() => {
                RNProgressHud.dismiss()
            })
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Background />
            <View style={styles.content}>
                <View style={styles.button}>
                    <Text style={styles.textRegister}>Register</Text>
                    <Image source={constants.image.icRegister} />
                    <Text style={styles.textContent}>
                        Input Phone Number to Continue the registration
                    </Text>
                    <View style={styles.boxSDT}>
                        <View style={styles.firstBox}>
                            <Image source={constants.image.icJapan} />
                            <Text style={styles.textPhone}>+81</Text>
                        </View>
                        <View style={styles.lastBox}>
                            <TextInput
                                value={phone}
                                onChangeText={(value) => setPhone(value)}
                                style={styles.textPhone}
                                placeholder='+123 456 789'
                                placeholderTextColor={constants.color.inputNoActive}
                                maxLength={12}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.boxContinue} onPress={handOnClickRegister}>
                        <Text style={styles.textContinue}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate(constants.screenName.login)}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        marginBottom: 242,
        alignItems: 'center'
    },
    button: {
        flex: 1,
        backgroundColor: constants.color.backgroundBelow,
        marginHorizontal: 15,
        marginTop: 88,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: constants.color.shadowBlack,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        elevation: 4,
        shadowRadius: 20,
        borderRadius: 20
    },
    boxImg: {
        width: 128,
        height: 141
    },
    textRegister: {
        fontFamily: constants.font.fontBold,
        fontSize: 24,
        marginTop: 38,
        marginBottom: 31
    },

    textContent: {
        fontFamily: constants.font.fontMedium,
        fontSize: 14,
        color: constants.color.textContent,
        marginTop: 25,
        marginBottom: 39,
        textAlign: 'center',
        marginHorizontal: 41
    },

    boxContent: {
        marginHorizontal: 41
    },
    boxSDT: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 40,
        width: 285,
        height: 50,
        borderColor: constants.color.borderColor,
        alignItems: 'center'
    },
    firstBox: {
        height: 40,
        borderRightWidth: 1,
        borderColor: constants.color.borderColor,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    lastBox: {
        marginLeft: 15
    },
    boxContinue: {
        backgroundColor: constants.color.buttonColor,
        width: 285,
        height: 46,
        marginVertical: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    textContinue: {
        fontSize: 14,
        color: constants.color.textButtonColor,
        fontFamily: constants.font.fontMedium
    },
    buttonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    textLogin: {
        fontSize: 14,
        color: constants.color.buttonColor,
        textDecorationLine: 'underline'
    },
    textPhone: {
        fontSize: 16,
        color: constants.color.inputActive
    }
})

export default RegisterScreen
