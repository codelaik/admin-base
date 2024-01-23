import ReactDOM from 'react-dom/client'
import './styles/css/reset.css'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'
import { UserAuthProvider } from './hooks/useAuth'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ThemeProvider theme={theme}>
        <UserAuthProvider>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </UserAuthProvider>
    </ThemeProvider>
)
