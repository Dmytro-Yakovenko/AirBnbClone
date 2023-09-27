import React from 'react'
import configBtn from './configBtn'
import "./Button.css"
const Button = ({id, onClick}) => {
    const {text, type, className}= configBtn[id]
  return (
    <button onClick={onClick} type={type} className={className}>{text}</button>
  )
}

export default Button