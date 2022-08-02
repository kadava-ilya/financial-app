export const selectTickers = state => state.tickers.tickers;
export const selectRemovedTicker = state => state.tickers.removedTicker;
export const selectTimeRange = state => state.tickers.timeRange;

export const selectInputValue = state => state.search.inputText;