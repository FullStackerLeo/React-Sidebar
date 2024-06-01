// https://www.linkedin.com/pulse/step-by-step-guide-creating-responsive-sidebar-menu-khalilullah-pgsjc/
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = ()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <button onClick={toggleSidebar}>Toggle</button>
      {isSidebarOpen && <Sidebar />}
      <MainContent />
    </>
  )
}

export default App
