import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import Profile from './components/Profile'
import Users from './components/Users'
import Management from './components/Management'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
        <Route path='/management' element={<Management />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
