import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem('theme') || 'lightMode' }

const themeSlicer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        lightMode_on: (state) => {
            localStorage.setItem('theme','lightMode')
            document.body.classList.add('lightMode')
            document.body.classList.remove('darkMode')
                state.theme = 'lightMode'
        },

        darkMode_on: (state) => {
            localStorage.setItem('theme','darkMode')
            document.body.classList.remove('lightMode')
            document.body.classList.add('darkMode')
            state.theme = 'darkMode'
        }
    }
})

export default themeSlicer.reducer
export const {lightMode_on, darkMode_on}=themeSlicer.actions