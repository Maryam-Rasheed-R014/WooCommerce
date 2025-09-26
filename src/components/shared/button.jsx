import { Icon } from '@iconify/react'
import React from 'react'

const Button = (
    {text, className, icon, iconClass,onClick, type = "button"}
) => {
  return (
    <>
        <button
            className={` bg-[var(--coloredButton)] text-white text-xl text-center  items-center flex justify-center gap-2 
                  w-full my-3 py-5 
                 ${className}`}
           onClick={onClick}
          >

            {icon && <Icon icon={icon} className={` ${iconClass}`}/>}
          <span>{text}</span>
          </button>
    </>
  )
}

export default Button
