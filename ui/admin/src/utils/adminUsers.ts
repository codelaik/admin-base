import { RequestType, fetcher } from './fetch'

export const getAllUsers = async () => {
    const data = await fetcher(RequestType.GET, `http://localhost:8081/api/admin/users/` )
    return data
}
