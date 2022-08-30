import axios from 'axios'
import constants from '../constants'
import AppManager from './AppManager'
import UserModel from '../model/UserModel'

export default class CommonAPIs {
    static baseURL = constants.baseURL

    static endpoints = {
        registerUser: CommonAPIs.baseURL + '/api/register',
        setPassword: CommonAPIs.baseURL + '/api/confirm-password',
        verifyPhone: CommonAPIs.baseURL + '/api/verify-phone',
        loginUser: CommonAPIs.baseURL + '/api/login',
        logoutUser: CommonAPIs.baseURL + '/api/logout',
        getAllCategory: CommonAPIs.baseURL + '/api/list-parent-category',
        getCategory: CommonAPIs.baseURL + '/api/list-store-parent-category'
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    static async register(phone) {
        try {
            const data = {
                phone
            }
            let response = await axios.post(CommonAPIs.endpoints.registerUser, data, {
                headers: this.headers
            })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async verifyPhone(phone, code) {
        try {
            const data = {
                phone,
                verification_code: code
            }
            let response = await axios.post(CommonAPIs.endpoints.verifyPhone, data, {
                headers: this.headers
            })
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
            const data = {
                phone,
                password
            }
            let response = await axios.post(CommonAPIs.endpoints.loginUser, data, {
                headers: this.headers
            })
            AppManager.shared.currentUser = new UserModel({
                access_token: response.data.access_token
            })
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
            return Promise.reject(error)
        }
    }

    static async allCategory() {
        try {
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            let response = await axios.get(CommonAPIs.endpoints.getAllCategory, { headers })
            return Promise.resolve(response.data.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async category(parent_id = 1) {
        try {
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            const url = CommonAPIs.endpoints.getCategory + `?parent_id=${parent_id}`
            let response = await axios.get(url, { headers })
            return Promise.resolve(response.data.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
