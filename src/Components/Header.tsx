import React from 'react'
import UnstyledSelectBasic from './Dropdown'
import SearchHeader from './SearchHeader'

const Header = () => {
  return (
    <div className='flex w-[100vw] justify-around pt-5'>
      <div className='flex items-center'>
        <img
          className='brand h-[22px] w-[101px]'
          src='https://rerollcdn.com/brand.svg'
          alt='TFTactics'
        ></img>
        <UnstyledSelectBasic />
      </div>
      <SearchHeader />
    </div>
  )
}

export default Header
