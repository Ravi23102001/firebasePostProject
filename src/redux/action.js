import { DARK_MODE_ON, LIGHT_MODE_ON } from "./actionTypes"

export const lightModeOn = () => {
    return{
        type:LIGHT_MODE_ON
    }
}

export const darkModeOn=()=>{
    return{
        type:DARK_MODE_ON
    }
}