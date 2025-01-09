import './Appsubmitbutton.css'
import React from 'react'
import { useThemeContext } from './../../hooks/useThemeContext';

export default function Appsubmitbutton({onClick,title}) {

  const {theme} = useThemeContext()
  return (
    <button type='submit' className="btn btn-primary" onClick={onClick} >{title}</button>
  )
}
