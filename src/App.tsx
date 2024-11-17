import { useEffect } from 'react';
import Navbar from './components/Navbar'
import { useDarkMode } from './context/darkModeContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  const {darkMode} = useDarkMode();

  useEffect(()=>{
    document.body.style.backgroundColor = darkMode ? "var(--very-dark-blue-bg)" : "var(--very-light-gray)"
  }, [darkMode])

  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App
