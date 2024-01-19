import { LoginPage } from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    )
}

export default App
