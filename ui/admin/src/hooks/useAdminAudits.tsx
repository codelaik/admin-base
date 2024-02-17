import { createContext, useContext, FC, useState, useEffect } from 'react'
import { TAudit } from '../types/entities'
import { getAudits } from '../utils/admin'

interface IAdminAuditsContext {
    audits: TAudit[]
    fetchAudits: (_?: number, __?: number) => void
}

const useAdminAudits = () => {
    const [audits, setAudits] = useState<TAudit[]>([])

    const fetchAudits = async (page = 0, limit = 1) => {
        const newAudits: TAudit[] = await getAudits(page, limit)

        setAudits([...audits, ...newAudits])
    }

    useEffect(() => {
        fetchAudits()
    }, [])
    return { audits, fetchAudits }
}

const AdminAuditsContext = createContext<IAdminAuditsContext>({
    audits: [],
    fetchAudits(_, __) {},
})

export const AdminAuditsProvider: FC<{ children: any }> = ({ children }) => {
    const value = useAdminAudits()
    return (
        <AdminAuditsContext.Provider value={value}>
            {children}
        </AdminAuditsContext.Provider>
    )
}

export const useAdminAuditsContext = () => useContext(AdminAuditsContext)
