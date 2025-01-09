
import { createContext, useEffect } from 'react';
import { useReducer } from 'react';


export const ThemeContext = createContext()

const ThemesReducer = (state,action) => {
    switch (action.type) {
        case 'LIGHT':
            localStorage.setItem('theme','lightMode')
            document.body.classList.add('lightMode')
            document.body.classList.remove('darkMode')
            return {...state,theme:'lightMode'}
        case 'DARK':
            localStorage.setItem('theme','darkMode')
            document.body.classList.remove('lightMode')
            document.body.classList.add('darkMode')
            return {...state,theme:'darkMode'}
        default:
            return state
    }
}


export const ThemeContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(ThemesReducer,{theme:localStorage.getItem('theme') || 'lightMode'})

    useEffect(() => {
        if(state.theme === 'darkMode'){
            document.body.classList.add('darkMode')
        }else{
            document.body.classList.add('lightMode')
        }
    },[state.theme])


    return (
        <ThemeContext.Provider  value={{...state,dispatch}}>
            {children}
        </ThemeContext.Provider>

    )
}


