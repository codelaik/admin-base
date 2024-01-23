import { TLoginInfo } from '../types/api'
import axios from 'axios'

const setAuthToken = (token: string | null) => {
    if (!token) {
        localStorage.removeItem('JWT')
        delete axios.defaults.headers.common['Authorization']
        return
    }
    localStorage.setItem('JWT', token)
    axios.defaults.headers.common['Authorization'] = token
}

export const checkLogin = async () => {
    try {
        setAuthToken(localStorage.getItem('JWT'))
        const { data } = await axios.get(
            `http://localhost:8081/api/admin/users/current`
        )
        if (data) {
            return data
        }
    } catch {
        return null
    }
}

//to be updated for hosted url
export const login = async (loginData: TLoginInfo) => {
    const { data } = await axios.post(
        `http://localhost:8081/api/admin/users/login`,
        {
            ...loginData,
        }
    )
    setAuthToken(data.tok)
    return data.user
}

export const logout = () => {
    setAuthToken(null)
}
