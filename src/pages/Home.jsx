import React from 'react'
import Navbar from '../components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='relative '>
        <img src={hero_banner} alt="hero_banner" className='w-full mask-gradient'/>
        <div className='absolute w-[100%] pl-[6%] bottom-0'>
          <img src={hero_title} alt="caption" className='w-[90%] max-w-[420px] mb-[30px]' />
          <p className='max-w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className='flex gap-[10px] mb-[50px]'>
            <button className='border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-semibold bg-white rounded-[4px] cursor-pointer text-black hover:bg-[#ffffffbf]'><img className='w-[25px]' src={play_icon} alt="play" />Play</button>
            <button className='border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] font-semibold  rounded-[4px] cursor-pointer bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'><img className='w-[25px]' src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
    </div>
  )
}

export default Home