export default class UserModel {
    accessToken: string = ''
    id: string = ''

    constructor(dict: any) {
        if (dict === undefined || dict === null) {
            return
        }
        this.id = dict?.id ?? null
        this.accessToken = dict?.access_token
    }
}
