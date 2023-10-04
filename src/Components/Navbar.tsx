import { useState } from 'react'
import { Tabs } from '@mui/base/Tabs'
import { TabsList } from '@mui/base/TabsList'
import { Tab } from '@mui/base/Tab'
import { Popper } from '@mui/base/Popper'

const navBarItem = [
  {
    name: 'Team Comps',
    value: 1,
    link: '',
  },
  {
    name: 'Meta Report',
    value: 2,
    link: '',
  },
  {
    name: 'Champions',
    value: 3,
    link: '',
  },
  {
    name: 'Tier Lists',
    value: 4,
    link: '',
    dropMenu: true,
  },
  {
    name: 'Item Builder',
    value: 5,
    link: '',
  },
  {
    name: 'Team Builder',
    value: 6,
    link: '',
  },
  {
    name: 'Database',
    value: 7,
    link: '',
    dropMenu: true,
  },
  {
    name: 'Patch Notes',
    value: 8,
    link: '',
  },
]

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isPopperOpen, setIsPopperOpen] = useState(false)

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setIsPopperOpen(!isPopperOpen)
  }

  const handleMouseEnter = () => {
    setIsPopperOpen(true)
  }

  const handleMouseLeave = () => {
    setIsPopperOpen(false)
  }

  const open = Boolean(anchorEl) && isPopperOpen
  const id = open ? 'simple-popper' : undefined

  return (
    <div className='border border-y-[#123040] border-x-transparent border-solid mt-2 '>
      <Tabs>
        <TabsList className='flex justify-center h-[50px] bg-[#102531]'>
          {navBarItem.map((item, index) => {
            return (
              <>
                <Tab
                  slotProps={{
                    root: ({ selected, disabled }) => ({
                      className: ` ${
                        selected ? 'border-b-[4px] border-[#d47559] text-white' : 'border-b-[4px] border-transparent'
                      } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer '} text-sm font-medium`,
                    }),
                  }}
                  className='pt-[4px] w-[140px] items-center px-[10px] text-[15px] text-[#88A0A7] transition-all duration-300 ease hover:text-white'
                  key={index}
                  value={item.value}
                  onClick={handleHover}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                </Tab>
                {item.dropMenu == true ? (
                  <Popper
                    key={id}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    className={``}
                  >
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className=' z-50 rounded-lg font-medium font-sans text-sm m-1 p-3 border border-solid border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-md text-purple-900 dark:text-purple-100'
                    >
                      The content of the Popper.
                    </div>
                  </Popper>
                ) : (
                  <>.</>
                )}
              </>
            )
          })}
        </TabsList>
        {/* {navBarItem.map((item, index) => {
          return (
            <TabPanel
              key={index}
              value={item.value}
            >
              {item.name}
            </TabPanel>
          )
        })} */}
      </Tabs>
    </div>
  )
}

export default Navbar
