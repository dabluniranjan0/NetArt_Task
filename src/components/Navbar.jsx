import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="flex justify-center">
                <Link to="/"><img className='w-[300px]' src={Logo} /></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar