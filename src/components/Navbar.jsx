import React from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile from '../assets/profile_img.png'
import caret from '../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='w-full p-[20px] px-[6%] flex justify-between fixed text-[14px] text-[#e5e5e5] bg-gradient-to-b from-[rgba(0,0,0,0.7)] from-10% to-transparent z-[1] pb-0'>
      <div className='flex items-center gap-[50px]'>
        <img src={logo} alt="Logo" className='w-[90px]' />
        <ul className='flex list-none gap-[20px]'>
          <li className='cursor-pointer'>Tv Shows</li>
          <li className='cursor-pointer'>Movies</li>
          <li className='cursor-pointer'>New & Popular</li>
          <li className='cursor-pointer'>My List</li>
          <li className='cursor-pointer'>Browse by Languages </li>
        </ul>
      </div>
      <div className='flex gap-[20px] items-center'>
        <img src={search_icon} alt="search-icon" className='w-[20px] cursor-pointer' />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className='w-[20px] cursor-pointer'/>
        <div className='flex items-center gap-[10px] cursor-pointer group'>
        <img src={profile} alt="profile" className='rounded-[4px] w-[35px] relative'/>
        <img src={caret} alt="caret" />
        <div className='absolute top-[100%] right-20 w-max bg-[#191919] p-[18px] px-[22px] rounded-[2px] underline z-[1] hidden group-hover:block'>
          <p className='text-[13px]'>Sign out </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar