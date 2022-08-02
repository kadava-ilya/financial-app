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

    it('should add new tickers with setTickers action', () => {
        const action = {type: setTickers.type, payload: {"ticker":"AAPL","exchange":"NASDAQ","price":"114.38","change":"39.32","change_percent":"0.00","dividend":"0.21","yield":"1.27","last_trade_time":"2022-07-31T06:13:28.000Z"}}

        const result = setTickers([], action)

        expect(result[0].tickers).toBe({"ticker":"AAPL","exchange":"NASDAQ","price":"114.38","change":"39.32","change_percent":"0.00","dividend":"0.21","yield":"1.27","last_trade_time":"2022-07-31T06:13:28.000Z"})
    })
})