import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tickers: [],
    removedTicker: [],
    timeRange: 5000,
}

const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        setTickers(state, action) {
            state.tickers = action.payload;
        },
        removeTicker(state, action) {
            state.removedTicker.push(action.payload);
        },
        showTicker(state, action) {
            state.removedTicker = state.removedTicker.filter(ticker => {return ticker !== action.payload})
        },
        setTimeRange(state, action) {
            state.timeRange = action.payload;
        }
    }
})


export const {setTickers, removeTicker, showTicker, setTimeRange} = tickersSlice.actions;

export default tickersSlice.reducer;