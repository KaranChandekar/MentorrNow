import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='    '>
      <div className='flex justify-between items-center  px-9 py-8 gap-4'>

        <div className='flex '>
          <Link to='/' className='flex'  onClick={() => {
      window.scrollTo(0,0)
    }}><img className='w-[200px] mt-2'src="https://i.ibb.co/pr6nQzZ/final-logo.png" alt="final-logo" border="0"/></Link>
        </div>
<div className=' hidden lg:flex   items-center'>
          <ul className='list-none flex flex-row  space-x-5 mr-6'>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>Mentorship-Options</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>How it works</li>
            <Link to='/about'><li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>About us</li></Link>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>Assessment</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300'>Join as a Mentor</li>
          </ul>
        
        <Button/>
</div>


{/* Mobile navbar ...... */}
<div className='flex lg:hidden justify-end items-center'>
<button onClick={() => setToggle(!toggle)}>
  <MenuIcon />
</button>



      {/* mobile menu...... */}
<div className={`${!toggle ? 'hidden' : 'flex'} p-6  bg-zinc-100 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
<ul className='list-none flex lg:hidden flex-col  gap-1 justify-end items-start'>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300  '>Mentorship</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>How it works</li>
            <Link to='/about'><li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>About us</li></Link>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>Assessment</li>
            <li className='cursor-pointer hover:text-zinc-400  transition ease-in-out duration-300 '>Join as a Mentor</li>
          </ul>
</div>
</div>
        </div>

    </nav>
  )
}

export default NavBar