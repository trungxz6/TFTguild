import React from 'react'
import UnstyledSelectBasic from './Dropdown'
import SearchHeader from './SearchHeader'
import Button from '@mui/material/Button'

const Header = () => {
  return (
    <div className='flex w-[100vw] justify-center mt-[8px]'>
      <div className='flex items-center'>
        <img
          className='brand h-[22px] w-[101px]'
          src='https://rerollcdn.com/brand.svg'
          alt='TFTactics'
        ></img>
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
