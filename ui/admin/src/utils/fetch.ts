import axios from "axios"
import toast from "react-hot-toast";

export enum RequestType {
    GET='get',
    POST='post',
    PATCH='patch',
    PUT='put',
    DELETE='delete'
} 

export const fetcher = async (requestType: RequestType, url: string, data?: any) => {
    const res = await axios[requestType](url, data).then((data: any) => data).catch((e) => {
        toast.error(`ERROR: ${e}`)
        return null;
    })
    return res
}