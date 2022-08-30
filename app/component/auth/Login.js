import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNProgressHud from 'progress-hud'

import Background from '../common/Background'
import InputStyle from '../common/InputStyle'
import constants from '../../controller/constants'
import CommonAPIs from '../../controller/APIs/CommonAPIs'
import ShowError from '../common/ShowError'

const LoginScreen = () => {
    const navigation = useNavigation()

    const [phone, setPhone] = useState('12345678910')
    const [pass, setPass] = useState('123456')

    const handleLoginUser = () => {
        if (phone.length == 0) {
            Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại')
            return
        } else if (pass.length == 0) {
            Alert.alert('Thông báo', 'Vui lòng nhập mật khẩu')
            return
        }

        RNProgressHud.showWithStatus('Loading...')
        CommonAPIs.login(phone, pass)
            .then((res) => {
                navigation.navigate(constants.screenName.tabNavigation)
            })
            .catch((err) => {
                ShowError(err)
            })
            .finally(() => {
                RNProgressHud.dismiss()
            })
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Background />
            <View style={styles.content}>
                <View style={styles.boxContent}>
                    <Text style={styles.textRegister}>Login</Text>
                    <Image source={constants.image.icLogin} style={styles.img} />
                    <Text style={styles.textContent}>
                        Type Phone Number and Password to Continue
                    </Text>
                    <InputStyle
                        name={'Phone Number'}
                        value={phone}
                        onChange={(value) => setPhone(value)}
                    />
                    <InputStyle
                        name={'Password'}
                        value={pass}
                        onChange={(value) => setPass(value)}
                        style={{ marginTop: 12 }}
                    />
                    <TouchableOpacity style={styles.boxLogin} onPress={handleLoginUser}>
                        <Text style={styles.textLogin}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonForgotPass}>
                    <Text style={styles.textForgotPass}>Forgot Password</Text>
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
    boxContent: {
        flex: 1,
        backgroundColor: constants.color.backgroundBelow,
        width: 325,
        height: 482,
        marginHorizontal: 25,
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
    img: {
        width: 128,
        height: 141
    },
    textRegister: {
        fontSize: 24,
        marginTop: 37,
        marginBottom: 24,
        fontFamily: constants.font.fontBold
    },
    textContent: {
        fontSize: 14,
        fontWeight: 'bold',
        color: constants.color.textContent,
        marginTop: 14,
        marginBottom: 18,
        textAlign: 'center',
        marginHorizontal: 41
    },
    boxPass: {
        // backgroundColor:'red'
    },
    boxPassConfirm: {
        marginTop: 11
    },
    boxLogin: {
        backgroundColor: constants.color.buttonColor,
        width: 285,
        height: 46,
        marginTop: 11,
        marginBottom: 23,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    textLogin: {
        fontSize: 14,
        color: constants.color.textButtonColor,
        fontWeight: 'bold'
    },
    textForgotPass: {
        fontSize: 14,
        fontWeight: 'bold',
        color: constants.color.buttonColor,
        textDecorationLine: 'underline'
    },
    textPhone: {
        fontSize: 16,
        color: 'black'
    },
    buttonForgotPass: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    }
})

export default LoginScreen
