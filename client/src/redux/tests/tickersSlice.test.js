import tickersSlice, {setTickers, removeTicker, showTicker, setTimeRange} from "../slices/tickersSlice";

describe('Tickers slice', () => {
    it('should return default state when passed empty action', () => {
        const result = tickersSlice(undefined, {type: ''});

        expect(result).toEqual({
            tickers: [],
            removedTicker: [],
            timeRange: 5000,
        })
    })
})