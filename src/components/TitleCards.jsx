import React, { useEffect, useRef } from 'react'
import cards_data from '../assets/cards/Cards_data'

const TitleCards = () => {
const cardsRef = useRef()
const handleWheel = (e) => {
  e.preventDefault()
  cardsRef.current.scrollLeft += e.deltaY
}
useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel),[]
})

  return (
    <div className='mt-[50px] mb-[30px]'>
      <h1 className='mb-[8px] text-4xl'>Trending on <span className='text-red-600 text-glow-red'>Netflix</span></h1>
      <div className='flex gap-[10px] overflow-x-auto no-scrollbar' ref={cardsRef}>
        {cards_data.map((card,index)=>{
          return(<div key={index} className='relative '>
            <img src={card.image} alt="" className='max-w-[240px] rounded-[4px] cursor-pointer' />
            <p className='absolute bottom-[10px] right-[10px] text-base'>{card.name}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default TitleCards