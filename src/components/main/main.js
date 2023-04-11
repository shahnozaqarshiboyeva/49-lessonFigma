import React from 'react'
import Navbar from '../navbar/navbar'
import SignUp from '../signup/SignUp'
export default function main({navbar}) {
  return (
    <div>
        <Navbar navbar={navbar}/>
        <SignUp/>
    </div>
  )
}
