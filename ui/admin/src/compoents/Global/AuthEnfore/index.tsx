import { FC, ReactElement } from 'react'
import { useUserAuthContext } from '../../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

export const AuthEnforce: FC<{
    children: ReactElement<any, any> | null
    noAuth?: boolean
}> = ({ children, noAuth = false }) => {
    const { authed } = useUserAuthContext()
    if (noAuth) {
        return authed === true ? <Navigate to="/" replace /> : children
    }

    return authed === true ? children : <Navigate to="/login" replace />
}
