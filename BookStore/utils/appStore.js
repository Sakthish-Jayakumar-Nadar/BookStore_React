import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './booksSlice.js'

const appStore = configureStore({
    reducer : {
        books : booksReducer,
    }
})

export default appStore;