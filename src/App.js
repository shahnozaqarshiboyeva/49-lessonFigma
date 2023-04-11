import React from 'react'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Login from './components/login/Login'
import Navbar from './components/navbar/navbar'
import Pricing from './components/pricing/Pricing'
import SignUp from './components/signup/SignUp'
import HomePage from './components/homePage/HomePage'
export default function App() {
  const [navbar,setNavbar]=useState([
    {name:'Home',path:'/homepage',id:1},
    {name:'About',path:'/about',id:2},
    {name:'Pricing',path:'/pricing',id:3},
    {name:'Blog',path:'/blog',id:4}
    
  ])
  return (
    <div className="container">
<Routes>
  <Route path='' element={<SignUp navbar={navbar}/>}/>
  <Route path='/homepage' element={<HomePage navbar={navbar}/>}/>
  <Route path='/about' element={<About navbar={navbar}/>}/>
  <Route path='/pricing' element={<Pricing navbar={navbar}/>}/>
  <Route path='/blog' element={<Blog navbar={navbar}/>}/>
  <Route path='/login' element={<Login navbar={navbar}/>}/>
  <Route path='/signup' element={<SignUp navbar={navbar}/>}/>

</Routes>
</div>
  )
}

