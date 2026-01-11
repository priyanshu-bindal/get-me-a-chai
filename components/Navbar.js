import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-950 text-white items-center h-14'>
      <div className='logo font-bold text-2xl '>GetMeaChai!</div>
        <ul className='flex justify-between gap-4  '>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
      
    </div>
  )
}

export default Navbar
