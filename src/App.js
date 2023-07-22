import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import React from 'react'
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import Video from './component/video'
import Upload from './component/upload';
import Login from './component/login'
import Signup from './component/signup'

const App = () => {
  return (
    <div>

      <BrowserRouter>
<Header/>
        <Routes>
          
<Route  path='/' element={<Home/>}/>
<Route  path='/videos' element={<Video/>}/>
<Route  path='/upload' element={<Upload/>}/>
<Route  path='/signup' element={<Signup/>}/>
<Route  path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
