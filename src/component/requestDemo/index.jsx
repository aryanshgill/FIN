import React from 'react'
import Vector from '../../assest/request/Vector.png'
import Button from '../../assest/request/buttonDemo.jpg'
import './styles.scss'
export const Request = () => {
  return (
    <>
    <div>
        <div className='request-body h-[100vh] flex flex-col justify-center items-center'>            
        <h1 className='text-5xl opacity-80 flex flex-wrap'>Add an impactful value to your company</h1>
        <img className='vector w-[70%]' src={Vector} alt="" />
        <p className='text-7xl mt-4 flex flex-wrap'><span className='text-blue-600'>Grow your&nbsp;</span> <b>Business</b> <span className='text-green-600'>&nbsp;to Next Level </span></p>
        <img className='request-button w-[250px] mt-16' src={Button} alt="" />
        </div>
    </div>
    </>

  )
}
