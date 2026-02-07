import React, { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#fff',
          fontFamily: 'serif',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#c9a96e' }}>
              ANANDA CROWN
            </h1>
            <p style={{ marginBottom: '1.5rem', color: '#999' }}>
              Something went wrong. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#c9a96e',
                color: '#0a0a0a',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'serif',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
