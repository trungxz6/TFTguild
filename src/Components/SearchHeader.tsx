import * as React from 'react'
import { useState } from 'react'
import { Select, SelectProps } from '@mui/base/Select'
import { Option as BaseOption, OptionProps, OptionOwnerState } from '@mui/base/Option'
import { Input } from '@mui/base/Input'
import clsx from 'clsx'
import SearchIcon from '@mui/icons-material/Search'

const getOptionColorClasses = ({ selected, disabled }: Partial<OptionOwnerState<number>>) => {
  let classes = ''
  if (disabled) {
    classes += ' text-[#E8F1F7] text-sm'
  } else {
    if (selected) {
      classes += ' bg-[#227AAD] text-[#E8F1F7] text-sm hover:bg-[#227AAD]'
    } else {
      classes += ' hover:bg-[#123040] hover:text-[#E8F1F7] text-sm active:bg-[#227AAD]'
    }
  }
  return classes
}

const Option = React.forwardRef<HTMLLIElement, OptionProps<number>>((props, ref) => {
  return (
    <BaseOption
      ref={ref}
      {...props}
      slotProps={{
        root: ({ selected, disabled }) => ({
          className: `last:border-b-[#123040] border-y-transparent border-x-[#123040] border-solid border list-none px-[12px] cursor-default w-[100px] h-[40px] text-sm flex items-center ${getOptionColorClasses(
            {
              selected,
              disabled,
            },
          )}`,
        }),
      }}
    />
  )
})

const SetSelector = [
  {
    set: 'BR',
    value: 10,
  },
  {
    set: 'EUNE',
    value: 20,
  },
  {
    set: 'EUW',
    value: 30,
  },
  {
    set: 'JP',
    value: 40,
  },
  {
    set: 'KR',
    value: 50,
  },
  {
    set: 'LAN',
    value: 60,
  },
  {
    set: 'LAS',
    value: 70,
  },
  {
    set: 'NA',
    value: 80,
  },
  {
    set: 'OCE',
    value: 90,
  },
  {
    set: 'TR',
    value: 100,
  },
  {
    set: 'RU',
    value: 110,
  },
]

const SearchHeader = () => {
  const [isFocus, setIsFocus] = useState(false)

  const handleInputFocus = () => {
    setIsFocus(true)
  }

  const handleInputBlur = () => {
    setIsFocus(false)
  }

  return (
    <div
      className={`flex items-center border border-solid ${
        isFocus ? 'border-[#d47559]' : 'border-[#123040]'
      } rounded-[3px] focus:border-purple-500 focus-visible:outline-1 w-[600px]`}
    >
      <CustomSelect defaultValue={SetSelector[0].value}>
        {SetSelector.map((item, index) => {
          return (
            <Option
              key={index}
              value={item.value}
            >
              {item.set}
            </Option>
          )
        })}
      </CustomSelect>
      <Input
        className=' text-sm font-sans font-normal leading-5 px-3 rounded-lg'
        slotProps={{
          input: {
            className: 'w-[450px] outline-none ',
          },
        }}
        aria-label='Demo input'
        placeholder='Search Summoner Name...'
        endAdornment={<SearchIcon fontSize='small' />}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  )
}
const resolveSlotProps = (fn: any, args: any) => (typeof fn === 'function' ? fn(args) : fn)

const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Select
      ref={ref}
      {...props}
      className={clsx('CustomSelect', props.className)}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(props.slotProps?.root, ownerState)
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm font-[Poppins] w-[100px] h-[33px] px-[12px] py-[6px] rounded-[3px] text-left bg-[#123040] text-[#E8F1F7] ${
                ownerState.focusVisible ? 'border-purple-400 ' : 'border border-[#123040]'
              } ${ownerState.open ? 'after:content-["▴"]' : 'after:content-["▾"]'} after:float-right`,
              resolvedSlotProps?.className,
            ),
          }
        },
        popper: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(props.slotProps?.popper, ownerState)
          return {
            ...resolvedSlotProps,
            className: clsx(`z-10`, resolvedSlotProps?.className),
          }
        },
      }}
    />
  )
})

export default SearchHeader
