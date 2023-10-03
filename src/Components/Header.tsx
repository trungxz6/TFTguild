import React from 'react'
import UnstyledSelectBasic from './Dropdown'
import SearchHeader from './SearchHeader'
import Button from '@mui/material/Button'

const Header = () => {
  return (
    <div className='flex w-[100vw] justify-center pt-5'>
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
      <div>
        <Button
          variant='outlined'
          href='#outlined-buttons'
        >
          Download now
        </Button>
      </div>
    </div>
  )
}

export default Header
