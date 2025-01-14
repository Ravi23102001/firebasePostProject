import { DARK_MODE_ON, LIGHT_MODE_ON } from "./actionTypes"

const themeState ={theme:localStorage.getItem('theme') || 'lightMode'}

const themeReducer = (state = themeState, action) => {
    switch (action.type) {
        case LIGHT_MODE_ON:
            localStorage.setItem('theme','lightMode')
            document.body.classList.add('lightMode')
            document.body.classList.remove('darkMode')
            return {
                ...state, theme: 'lightMode'
            }
        case DARK_MODE_ON:
            localStorage.setItem('theme','darkMode')
            document.body.classList.remove('lightMode')
            document.body.classList.add('darkMode')
            return {
                ...state, theme: 'darkMode'
            }

        default:
            return state
    }

}

export default themeReducer