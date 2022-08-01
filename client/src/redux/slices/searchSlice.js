import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    inputText: '',
}

const searchSlice = createSlice({
    name: 'inputValue',
    initialState,
    reducers: {
        setInputValue(state, action) {
            state.inputText = action.payload;
        }
    }
})

export const selectInputValue = state => state.search.inputText;

export const {setInputValue} = searchSlice.actions;

export default searchSlice.reducer;