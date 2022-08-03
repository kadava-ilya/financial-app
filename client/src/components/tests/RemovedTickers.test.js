import {RemovedTickers} from "../RemovedTickers";
import {fireEvent, render, screen} from "@testing-library/react";
import * as reduxHooks from "react-redux";

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

const test = ['AAPL', 'FB', 'TSLA'];

describe('RemovedTickers component', () => {
    it('should create a RemovedTickers', () => {
        mockedUseSelector.mockReturnValue(test)
        mockedDispatch.mockReturnValue(jest.fn());

        const component = render(<RemovedTickers />)

        expect(component).toMatchSnapshot()
    })

    it('should render the text in RemovedTickers', () => {
        mockedUseSelector.mockReturnValue(test)

        render(<RemovedTickers />)

        expect(screen.getByText(/Removed tickers:/))
    })

    it('should dispatch action on button click', () => {
        const dispatch = jest.fn()
        mockedUseSelector.mockReturnValue(test)
        mockedDispatch.mockReturnValue(dispatch);

        render(<RemovedTickers />)

        // fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByText(/AAPL/))
        fireEvent.click(screen.getByText(/TSLA/))
        fireEvent.click(screen.getByText(/FB/))

        expect(dispatch).toHaveBeenCalled()
    })
} )