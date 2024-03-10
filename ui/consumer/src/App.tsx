import './App.css'
import Navbar from './components/global/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/pictures" element={<Home />} />
                <Route path="/calendar" element={<Home />} />
                <Route path="/contact" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
