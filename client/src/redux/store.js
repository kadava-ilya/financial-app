import {configureStore} from "@reduxjs/toolkit";
import search from "./slices/searchSlice";
import tickers from "./slices/tickersSlice";

export const store = configureStore({
    reducer: {
        search,
        tickers,
    }
})