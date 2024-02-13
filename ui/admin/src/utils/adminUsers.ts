import { RequestType, fetcher } from './fetch'

export const getAllUsers = async (showDisabled: boolean) => {
    const res = await fetcher(RequestType.POST, `http://localhost:8081/api/admin/users/`, { showDisabled } )
    return res
}
