 import { createSlice } from "@reduxjs/toolkit";
 import BookData from "./BookData";

 const booksSlice = createSlice({
    name : 'books',
    initialState : {
        items : [...BookData],
    },
    reducers : {
        addBook : (state, action) => {
            state.items.push(action.payload);
        }
    }
 })

 export const { addBook } = booksSlice.actions
 export default booksSlice.reducer