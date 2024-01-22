import { TLoginInfo, TLoginResult } from '../types/api'
import axios from 'axios'

const setAuthToken = (token: string | null) => {
    if (!token) {
        delete axios.defaults.headers.common['Authorization']
        return
    }
    axios.defaults.headers.common['Authorization'] = token
}

//to be updated for hosted url
export const login = async (data: TLoginInfo) => {
    const res: TLoginResult = await axios.post(
        `http://localhost:8081/api/admin/users/login`,
        {
            ...data,
        }
    )
    setAuthToken(res.token)
    return res.user
}

export const logout = () => {
    setAuthToken(null)
}
