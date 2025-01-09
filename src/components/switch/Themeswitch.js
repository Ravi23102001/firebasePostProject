import React from "react";

import './Themeswitch.css';
import { useThemeContext } from './../../hooks/useThemeContext';

export default function ThemeSwitch() {


  const {theme,dispatch} = useThemeContext()


  const switchTheme = () => {
    if (theme === 'lightMode') {
        dispatch({type:'DARK'})
    } else {
        dispatch({type:'LIGHT'})
    }
  }

  return (
      <label className="switch toggle">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          checked={theme === 'darkMode'}
           onClick={switchTheme}
        />

<span class="slider"></span>
    </label>
  );
}
