import * as React from 'react'
import { Select, SelectProps } from '@mui/base/Select'
import { Option as BaseOption, OptionProps, OptionOwnerState } from '@mui/base/Option'
import clsx from 'clsx'

const getOptionColorClasses = ({ selected, disabled }: Partial<OptionOwnerState<number>>) => {
  let classes = ''
  if (disabled) {
    classes += ' text-[#E8F1F7] text-sm'
  } else {
    if (selected) {
      classes += ' bg-[#227AAD] text-[#E8F1F7] text-sm hover:bg-[#227AAD]'
    } else {
      classes += ' hover:bg-[#123040] hover:text-[#E8F1F7] text-sm'
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
          className: `list-none px-[12px] cursor-default last-of-type:border-b-0 w-[100px] h-[40px] text-sm flex items-center ${getOptionColorClasses(
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
    set: 'Set 9.5',
    value: 10,
  },
  {
    set: 'Set 10',
    value: 20,
  },
  {
    set: 'Set 10.5',
    value: 30,
  },
]

export default function UnstyledSelectBasic() {
  return (
    <div>
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
