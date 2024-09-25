import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import './index.css'

function App(){
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
