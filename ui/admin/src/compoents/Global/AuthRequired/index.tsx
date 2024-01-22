import { FC, ReactNode } from 'react'
import { useUserAuthContext } from '../../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

export const RequireAuth: FC<{ children: ReactNode }> = ({ children }) => {
    const { authed } = useUserAuthContext()

    return authed === true ? children : <Navigate to="/login" replace />
}
