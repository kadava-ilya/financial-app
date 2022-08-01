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
        setTimeRange(state, action) {
            state.timeRange = action.payload;
        }
    }
})

export const selectTickers = state => state.tickers.tickers;
export const selectRemovedTicker = state => state.tickers.removedTicker;
export const selectTimeRange = state => state.tickers.timeRange;

export const {setTickers, removeTicker, setTimeRange} = tickersSlice.actions;

export default tickersSlice.reducer;