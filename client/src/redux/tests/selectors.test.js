import {selectTickers} from "../selectors";

describe('redux selectors', () => {
    it('should select tickers from state object', () => {
        const tickers = [{"ticker":"AAPL","exchange":"NASDAQ","price":"114.38","change":"39.32","change_percent":"0.00","dividend":"0.21","yield":"1.27","last_trade_time":"2022-07-31T06:13:28.000Z"}];

        const result = selectTickers({tickers})

        expect(result).toEqual(tickers.tickers)
    })
})