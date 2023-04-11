import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import {MaricoImg} from '../img/Img'
export default function navbar({navbar}) {
  return (
<div>
<div className='Navbar'>
      <div className="Navbar__icon">
        <div className="img"><MaricoImg/></div>
        <span>Marico</span>
      </div>
  <ul>
    {
      navbar.map((item,index)=><li ><Link className='Link' to={item.path} >{item.name}</Link></li>)
    }
  </ul>
  <button className='button-navbar1'><Link className='Link1' to='/login'>Login</Link></button>
  <button className='button-navbar2'><Link className='Link2' to='/signup'>Sign Up</Link></button>
    </div>
</div>
  )
}
