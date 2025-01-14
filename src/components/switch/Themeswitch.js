import React from "react";

import './Themeswitch.css';
import { useThemeContext } from './../../hooks/useThemeContext';
import { connect } from "react-redux";
import { darkModeOn, lightModeOn } from "../../redux/action";

function ThemeSwitch(props) {


  const { theme, dispatch } = useThemeContext()



  const themeChanger = () => {
    if (props.reduxTheme === 'lightMode') {
      props.darkModeDispatch()
    } else {
      props.lightModeDispatch()
    }
  }

  return (
    <label className="switch toggle">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={props.reduxTheme === 'darkMode'}
        //  onClick={switchTheme}
        onClick={themeChanger}
      />

      <span className="slider"></span>
    </label>
  );
}

const mapStateToProp = (state) => {
  return {
    reduxTheme:state.themeReducer.theme
  }
  console.log(state)
}

const mapStateToDispatch = (dispatch) => {
  return {
    lightModeDispatch: () => dispatch(lightModeOn()),
    darkModeDispatch: () => dispatch(darkModeOn())
  }
}

export default connect(mapStateToProp, mapStateToDispatch)(ThemeSwitch)
