import { AuthEnforce } from './compoents/Global/AuthEnfore'
import { LoginPage } from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './compoents/Global/NavBar'
import { Box } from '@mui/material'

function App() {
    return (
        <Box id="main-body">
            <Navbar />
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
                            <h1
                                style={
                                    {
                                        // backgroundColor: 'white',
                                        // width: '100%',
                                    }
                                }
                            >
                                Logged In!
                            </h1>
                        </AuthEnforce>
                    }
                />
                <Route
                    path="/g"
                    element={
                        <AuthEnforce>
                            <h1>It Worked!!</h1>
                        </AuthEnforce>
                    }
                />
            </Routes>
        </Box>
    )
}

export default App
