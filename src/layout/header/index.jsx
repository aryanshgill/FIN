import React from 'react'
import Logo from "../../assest/header/logoVector.png"
import Finovo from '../../assest/header/text.png'
import './styles.scss'
export const Header = () => {
  return (
    <>
    <div className='header flex py-2 justify-around'>
        <div className='flex'>
        <img className='w-[60px] h-[50px]' src={Logo} alt=""  />
        <img className='h-[50px] ms-4' src={Finovo} alt=""  />
        </div>
        {/* <div className='list' >
            <ul className='py-2 text-xl flex justify-center items-center font-bold'>
                <li className='mx-4'>Product</li>
                <li className='mx-4'>Solutions</li>
                <li className='mx-4'>Industries</li>
                <li className='mx-4'>Resources</li>
                <li className='mx-4'>About</li>
            </ul>
        </div> */}
        <nav className='navbar py-2 text-xl font-semibold'>
          <a href="">Product</a>
          <a href="">Solutions</a>
          <a href="">Industries</a>
          <a href="">Resources</a>
          <a href="">About</a>
        </nav>
    </div>
    </>
  )
}
