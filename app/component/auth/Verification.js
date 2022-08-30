import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNProgressHud from 'progress-hud'

import Background from '../common/Background'
import constants from '../../controller/constants'
import CommonAPIs from '../../controller/APIs/CommonAPIs'

const VerificationScreen = () => {
    const navigation = useNavigation()

    const route = useRoute()
    const phone = route.params?.phone

    const [code1, setCode1] = useState('')
    const [code2, setCode2] = useState('')
    const [code3, setCode3] = useState('')
    const [code4, setCode4] = useState('')
    const [currentCount, setCount] = useState(30)

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()

    const timer = () => setCount(currentCount - 1)

    useEffect(() => {
        if (currentCount > 0) {
            const id = setInterval(timer, 1000)
            return () => clearInterval(id)
        }
    }, [currentCount])

    const handleOnClickVerification = () => {
        RNProgressHud.showWithStatus('Loading...')

        CommonAPIs.verifyPhone(phone, code1 + code2 + code3 + code4)
            .then((res) => {
                navigation.navigate(constants.screenName.confirm, {
                    accessToken: route.params?.accessToken,
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
                    <Text style={styles.textRegister}>Verification</Text>
                    <View style={styles.boxImg}>
                        <Image source={constants.image.icVerification} style={styles.img} />
                    </View>
                    <View style={styles.boxContent}>
                        <Text style={styles.textContent}>
                            Please enter the code was sent in your phone number
                        </Text>
                    </View>
                    <View style={styles.boxCode}>
                        <View style={styles.code}>
                            <TextInput
                                ref={ref1}
                                placeholder='0'
                                placeholderTextColor={constants.color.inputNoActive}
                                style={styles.textCode}
                                autoFocus={true}
                                value={code1}
                                maxLength={1}
                                onChangeText={(value) => {
                                    setCode1(value)
                                    if (value.length > 0) {
                                        ref2.current.focus()
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.code}>
                            <TextInput
                                ref={ref2}
                                placeholder='0'
                                placeholderTextColor={constants.color.inputNoActive}
                                style={styles.textCode}
                                value={code2}
                                maxLength={1}
                                onChangeText={(value) => {
                                    setCode2(value)
                                    if (value.length > 0) {
                                        ref3.current.focus()
                                    } else {
                                        ref1.current.focus()
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.code}>
                            <TextInput
                                ref={ref3}
                                placeholder='0'
                                placeholderTextColor={constants.color.inputNoActive}
                                style={styles.textCode}
                                value={code3}
                                maxLength={1}
                                onChangeText={(value) => {
                                    setCode3(value)
                                    if (value.length > 0) {
                                        ref4.current.focus()
                                    } else {
                                        ref2.current.focus()
                                    }
                                }}
                            />
                        </View>
                        <View style={styles.code}>
                            <TextInput
                                ref={ref4}
                                placeholder='0'
                                placeholderTextColor={constants.color.inputNoActive}
                                style={styles.textCode}
                                maxLength={1}
                                onChangeText={(value) => {
                                    setCode4(value)
                                    if (value.length <= 0) {
                                        ref3.current.focus()
                                    }
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleOnClickVerification}>
                        <View style={styles.boxContinue}>
                            <Text style={styles.textContinue}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonTime}>
                    <Text style={styles.textTime}>
                        00:{currentCount < 10 ? `0${currentCount}` : currentCount}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => setCount(30)} style={styles.buttonResend}>
                    <Text style={styles.textResend}>Resend</Text>
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
        backgroundColor: 'white',
        width: 325,
        height: 452,
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
    boxImg: {
        width: 128,
        height: 141
    },
    Img: {
        width: '100%',
        height: '100%'
    },
    textRegister: {
        fontSize: 24,
        marginVertical: 20,
        fontWeight: 'bold'
    },
    textContent: {
        fontSize: 14,
        fontWeight: 'bold',
        color: constants.color.textContent,
        marginTop: 25,
        textAlign: 'center',
        fontFamily: constants.font.fontMedium
    },
    boxContent: {
        marginHorizontal: 41
    },
    boxCode: {
        flexDirection: 'row',
        height: 60,
        width: 285,
        marginTop: 25,
        justifyContent: 'space-between'
    },
    code: {
        height: 60,
        width: 60,
        borderWidth: 1,
        borderColor: constants.color.borderColor,
        borderRadius: 5,
        justifyContent: 'center'
    },
    textCode: {
        fontSize: 24,
        color: constants.color.inputActive,
        textAlign: 'center',
        fontFamily: constants.font.fontVeryBold,
        includeFontPadding: false
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
        fontWeight: 'bold'
    },
    buttonTime: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 26
    },
    textTime: {
        fontSize: 14,
        fontWeight: 'bold',
        color: constants.color.buttonColor,
        textDecorationLine: 'underline'
    },
    buttonResend: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    textResend: {
        fontSize: 14,
        fontWeight: 'bold',
        color: constants.color.textContent
    }
})

export default VerificationScreen
