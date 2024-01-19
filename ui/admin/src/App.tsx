import { LoginPage } from './pages/LoginPage'
import './styles/css/App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    )
}

export default App
