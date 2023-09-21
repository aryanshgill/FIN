import React from 'react'
import WhiteStar from '../../assest/reviewComponent/whiteStar.svg'
import BlueStar from '../../assest/reviewComponent/blueStar.svg'
import GreenStar from '../../assest/reviewComponent/greenStar.svg'
import './styles.scss'

export const ReviewComp = () => {
  return (
    <>
        <div className='p-20 flex bg-grey'>
        <div className='ms-8 w-[15%] text-7xl  text-white font-bold flex flex-col justify-start'>
            <p>We're</p>
            <p>here</p>
            <p>for</p>
            <p>you!</p>
        </div>
        <div className='ms-20 w-[60%] relative flex flex-col justify-center items-center text-white font-semibold text-xl'>
          <img className='w-16 absolute top-0 left-24'   src={WhiteStar} alt="" />
          <img className='w-24 absolute top-0 right-0' src={BlueStar} alt="" />
          <img className='w-24 absolute bottom-0' src={GreenStar} alt="" />
            <p>It's time for you to relex <br/>your business is our responsibility.</p>
            <p></p>
        </div>
        </div>
        <div className='review-client'>
          <p>CLient's Testimonials</p>
        </div>
    </>
  )
}
