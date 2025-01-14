import React from "react";

import './Themeswitch.css';
import { useThemeContext } from './../../hooks/useThemeContext';
import { connect, useDispatch, useSelector } from "react-redux";
import { darkModeOn, lightModeOn } from "../../redux/action";
import { darkMode_on, lightMode_on } from "../../redux/themeSlice";

function ThemeSwitch(props) {
  const theme=useSelector(state=>state.themereducer.theme)
const dispatch=useDispatch();
console.log(theme, 'theme')

const themeChanger=()=>{
  if(theme==='darkMode'){
    dispatch(lightMode_on())
  }
  else{
    dispatch(darkMode_on())
  }
}


  return (
    <label className="switch toggle">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={theme === 'darkMode'}
        onClick={themeChanger}
      />

      <span className="slider"></span>
    </label>
  );
}

export default ThemeSwitch