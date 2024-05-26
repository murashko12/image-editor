import React from 'react'
import { TButton } from '../types/TButton'

const Button: React.FC<TButton> = (props: TButton) => {
    return (
        <button 
            onClick={props.func} 
            className="w-full h-14 flex justify-center items-center capitalize cursor-pointer rounded-md bg-firstBackgroundColor border-secondBackgroundColor ring-rose-500 hover:ring-2"
        >
            {props.children}
        </button>
    )
}

export default Button
