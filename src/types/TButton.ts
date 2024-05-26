import React from 'react'
type CallbackFunction = () => void

export type TButton = {
    children: string | React.ReactNode;
    func: CallbackFunction;
}