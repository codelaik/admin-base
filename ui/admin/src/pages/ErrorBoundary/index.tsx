import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'
import styles from './styles'

class ErrorBoundary extends Component<
    { children: any },
    { hasError: boolean }
> {
    constructor(props: { children: any }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(`Error: ${error} | ${errorInfo}`)
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box sx={styles.errorPageContainer}>
                    <Box>
                        <Typography>Something Broke :(</Typography>
                        <Typography>
                            Refresh the page or try again later
                        </Typography>
                    </Box>
                </Box>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
