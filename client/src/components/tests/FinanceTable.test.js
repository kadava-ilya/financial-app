import {FinanceTable} from "../FinanceTable";
import {render, screen} from "@testing-library/react";
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

const tickers = [{"ticker":"AAPL","exchange":"NASDAQ","price":"114.38","change":"39.32","change_percent":"0.00","dividend":"0.21","yield":"1.27","last_trade_time":"2022-07-31T06:13:28.000Z"}]
const inputValue = 'AAPL'
const removedTickers = ['FB']

describe('FinanceTable test', () => {
    it('should create table with empty data array', () => {
        const component = render(<FinanceTable tickersData={[]}/>)

        expect(component).toMatchSnapshot();
    });

    it('should create table with data array', () => {
        mockedUseSelector.mockReturnValue(tickers)

        const component = render(<FinanceTable tickersData={tickers} inputValue={inputValue} removedTicker={removedTickers}/>)

        expect(component).toMatchSnapshot();
    });

    it('table renders', () => {
        render(<FinanceTable tickersData={tickers} inputValue={''} removedTicker={[]}/>)

        expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('should render AAPL row', () => {
        render(<FinanceTable tickersData={tickers} inputValue={inputValue} removedTicker={[]}/>)

        expect(screen.getByText(/AAPL/)).toBeInTheDocument()
    })

    it('should render FB button of the removed ticker', () => {
        render(<FinanceTable tickersData={tickers} inputValue={''} removedTicker={removedTickers}/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})