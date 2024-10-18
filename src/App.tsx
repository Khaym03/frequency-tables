import './App.css'
import { SimpleTable } from './components/simple-table'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SimpleTable />
    </ThemeProvider>
  )
}

export default App
