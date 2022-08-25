import { Dimensions } from 'react-native'
export default constants = {
    baseURL: 'https://nexus-point-dev.test-development.work',
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        register: 'RegisterScreen',
        verification: 'VerificationScreen',
        confirm: 'ConfirmPassScreen',
        login: 'LoginScreen',
        home: 'HomeScreen',
        tabNavigation: 'TabNavigation'
    },
    image: {
        background: require('../assets/images/img_background.png'),
        imgSpray: require('../assets/images/img_spray.png'),
        icRegister: require('../assets/images/ic_register.png'),
        icVerification: require('../assets/images/ic_verification.png'),
        icConfirm: require('../assets/images/ic_confirm.png'),
        icLogin: require('../assets/images/ic_login.png'),
        icRuby: require('../assets/images/ic_ruby.png'),
        icScan: require('../assets/images/ic_scan.png'),
        icSend: require('../assets/images/ic_send.png'),
        icReceive: require('../assets/images/ic_receive.png'),
        icJapan: require('../assets/images/img_japan.png')
    },
    color: {
        header: '#373737',
        textContent: '#868686',
        inputActive: '#747474',
        inputNoActive: '#E2E2E2',
        buttonColor: '#00CEFF',
        textButtonColor: '#FFFFFF',
        backgroundBelow: 'white',
        borderColor: '#CCCCE3',
        shadowBlack: 'black',
        textTabNoActive: '#979797',
        textTabActive: '#00CEFF',

        blue: '#00CEFF',
        white: '#FFFFFF',
        darkBlue: '#7879E8',
        gray: '#EAEAF6'
    },
    font: {
        fontVeryBold: 'Poppins-Bold',
        fontBold: 'Poppins-SemiBold',
        fontMedium: 'Poppins-Medium',
        fontRegular: 'Poppins-Regular',
        fontRubik: 'Rubik-Medium'
    }
}
