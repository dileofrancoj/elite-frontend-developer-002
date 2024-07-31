import { ErrorBoundary } from '@sentry/react'
import './App.css'
import { Characters } from './Characters'

function App() {
  return (
    <ErrorBoundary>
      <Characters />
    </ErrorBoundary>
  )
}

export default App
