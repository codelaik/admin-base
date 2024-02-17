import { AuthEnforce } from './compoents/Global/AuthEnfore'
import { LoginPage } from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './compoents/Global/NavBar'
import { Box } from '@mui/material'
import { useUserAuthContext } from './hooks/useAuth'
import { LoadingPage } from './pages/LoadingPage'
import { AdminUsersPage } from './pages/AdminUsers'
import { AdminUsersProvider } from './hooks/useAdminUsers'
import ErrorBoundary from './pages/ErrorBoundary'
import { AdminAuditsProvider } from './hooks/useAdminAudits'
import { AdminAuditsPage } from './pages/AdminAudits'

function App() {
    const { isLoading } = useUserAuthContext()

    if (isLoading) return <LoadingPage />

    return (
        <Box id="main-body">
            <Navbar />
            <ErrorBoundary>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <AuthEnforce noAuth>
                                <LoginPage />
                            </AuthEnforce>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <AuthEnforce>
                                <h1>Logged In!</h1>
                            </AuthEnforce>
                        }
                    />
                    <Route
                        path="/admin/users"
                        element={
                            <AuthEnforce>
                                <AdminUsersProvider>
                                    <AdminUsersPage />
                                </AdminUsersProvider>
                            </AuthEnforce>
                        }
                    />
                    <Route
                        path="/admin/audits"
                        element={
                            <AuthEnforce>
                                <AdminAuditsProvider>
                                    <AdminAuditsPage />
                                </AdminAuditsProvider>
                            </AuthEnforce>
                        }
                    />
                </Routes>
            </ErrorBoundary>
        </Box>
    )
}

export default App
