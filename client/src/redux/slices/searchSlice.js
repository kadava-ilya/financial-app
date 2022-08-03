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
        },
        setInputClear(state) {
            state.inputText = ''
        }
    }
})

export const {setInputValue, setInputClear} = searchSlice.actions;

export default searchSlice.reducer;