import { AuthEnforce } from './compoents/Global/AuthEnfore'
import { LoginPage } from './pages/LoginPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
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
            </Routes>
        </BrowserRouter>
    )
}

export default App
