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
        console.log(`Error: ${error} | ${errorInfo.componentStack}`)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={styles.errorPageContainer}>
                    <div>
                        <div>Something Broke :(</div>
                        <div>Refresh the page or try again later</div>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
