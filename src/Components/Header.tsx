import React from 'react'
import UnstyledSelectBasic from './Dropdown'
import SearchHeader from './SearchHeader'
import logo from '../assets/logo/logo.png'

const Header: React.FC = () => {
  return (
    <div className='flex w-[100vw] justify-center mt-[8px]'>
      <div className='flex items-center'>
        <>
          <img
            className='w-[60px]'
            src={logo}
            alt='TFTactics'
          />
          <span className='mr-4 text-[var(--text-highlight-clr)] font-bold text-xl'>TFT TOP 8</span>
        </>
        <UnstyledSelectBasic />
      </div>
      <div className='mx-[150px]'>
        <SearchHeader />
      </div>
      <button
        className='border border-solid border-[#123040] hover:bg-[#2C98D6] bg-[#4080B0] 
        rounded-3px px-[7px] py-[12px] h-[34px] text-xs flex text-center items-center rounded-[3px] font-semibold w-[116px]'
      >
        DOWNLOAD APP
      </button>
    </div>
  )
}

export default Header
