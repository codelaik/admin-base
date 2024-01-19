import ReactDOM from 'react-dom/client'
import './styles/css/reset.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
