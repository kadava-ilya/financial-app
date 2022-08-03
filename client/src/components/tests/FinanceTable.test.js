import {FinanceTable} from "../FinanceTable";
import {render, screen} from "@testing-library/react";
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

const test = [{"ticker":"AAPL","exchange":"NASDAQ","price":"114.38","change":"39.32","change_percent":"0.00","dividend":"0.21","yield":"1.27","last_trade_time":"2022-07-31T06:13:28.000Z"}]

describe('FinanceTable test', () => {
    it('should create table with empty data array', () => {
        mockedUseSelector.mockReturnValue([])

        const component = render(<FinanceTable />)

        expect(component).toMatchSnapshot();
    });

    it('should create table with data array', () => {
        mockedUseSelector.mockReturnValue(test)

        const component = render(<FinanceTable />)

        expect(component).toMatchSnapshot();
    });

    it('table renders', () => {
        render(<FinanceTable />)

        expect(screen.getByRole('table')).toBeInTheDocument()
    })
})