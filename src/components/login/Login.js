import React from 'react'
import './Login.scss'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import { AppleImg, EmailImg, FacebookImg, GoogleImg, PasswordImg, UsernameImg } from '../img/Img'
export default function SignUp({navbar}) {
  const [active, setActive] = useState(true)
  return (
   <div>
    <Navbar navbar={navbar}/>
     <div className='login1'>
      <h1>Login</h1>
      <h2>Fill all field for create an account.</h2>
       <div className="form">
        <div className="user">
          <input type="text" placeholder='Username' />
          <span><UsernameImg/></span>
        </div>
        <div className="password">
        <input type={active ? "password" : 'text'} placeholder='Password' />
        <span className={active ? 'show' : 'hide'} onClick={()=>setActive(false)}>
        <i class="fa-solid fa-eye"></i></span>
        <span  className={active ? 'hide' : 'show'} onClick={()=>setActive(true)}>
        <i class="fa-solid fa-eye-slash"></i>
          </span>
        </div>
        <button className='signupbutton1'><Link className='Link1' to='/signup'>Sign Up</Link></button>
       </div>
       <h5>Or</h5>
      <p>Sign up with...</p>
      <div className="button-box">
      <button className="fasebookbutton">
        <span><FacebookImg/></span>
        <h6><Link className='Link' to="https://www.facebook.com/facebook/?locale=ru_RU" target="_blank">Sign up with Facebook</Link></h6>
      </button>
      <button className="googlebutton">
        <span><GoogleImg/></span>
        <h6><Link className='Link' to="https://www.google.ru/" target="_blank">Sign up with Google</Link></h6>
      </button>
      <button className="applebutton">
        <span><AppleImg/></span>
        <h6><Link className='Link' to="https://www.apple.com/" target="_blank">Sign up with Apple</Link></h6>
      </button>
      </div>
      <button className='signupb'><Link className='Link' to='/signup'>Already have an account? Please Log in.</Link></button>
      </div>
   </div>
  )
}

