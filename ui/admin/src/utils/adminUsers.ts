import axios from 'axios'

export const getAllUsers = async () => {
    const { data } = await axios.get(`http://localhost:8081/api/admin/users/`)
    return data
}
