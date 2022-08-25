import axios from 'axios'
import constants from '../constants'

export default class CommonAPIs {
    static baseURL = constants.baseURL

    static endpoints = {
        registerUser: CommonAPIs.baseURL + '/api/register',
        setPassword: CommonAPIs.baseURL + '/api/confirm-password',
        verifyPhone: CommonAPIs.baseURL + '/api/verify-phone',
        loginUser: CommonAPIs.baseURL + '/api/login',
        logoutUser: CommonAPIs.baseURL + '/api/logout'
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    static async register(phone) {
        try {
            const headers = {
                ...this.headers
            }
            const data = {
                phone
            }
            let response = await axios.post(CommonAPIs.endpoints.registerUser, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async verifyPhone(phone, code) {
        try {
            const headers = {
                ...this.headers
            }
            const data = {
                phone,
                verification_code: code
            }
            let response = await axios.post(CommonAPIs.endpoints.verifyPhone, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async setPassword(phone, password, accessToken) {
        try {
            const headers = {
                ...this.headers,
                Authorization: `Bearer ` + accessToken
            }
            const data = {
                phone,
                password
            }
            let response = await axios.post(CommonAPIs.endpoints.setPassword, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async login(phone, password) {
        try {
            const headers = {
                ...this.headers
            }
            const data = {
                phone,
                password
            }
            let response = await axios.post(CommonAPIs.endpoints.loginUser, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }
}
