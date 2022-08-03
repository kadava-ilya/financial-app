import {TimeSelect} from "../TimeSelect";
import {fireEvent, render, screen} from "@testing-library/react";
import * as reduxHooks from "react-redux";

jest.mock('react-redux')

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

const test = [
    {
        id: 1,
        title: '1s',
        value: 1000,
    },
    {
        id: 2,
        title: '5s',
        value: 5000,
    },
]

describe('TimeSelect', () => {
    it('should create TimeSelect without options', function () {
        mockedUseSelector.mockReturnValue([])

        const component = render(<TimeSelect />)

        expect(component).toMatchSnapshot()
    });

    it('should create TimeSelect with options', function () {
        mockedUseSelector.mockReturnValue(test)

        const component = render(<TimeSelect />)

        expect(component).toMatchSnapshot()
    });

    it('should select renders in TimeSelect component', () => {
        mockedUseSelector.mockReturnValue(test)

        render(<TimeSelect />)

        expect(screen.getByText(/Select the time range:/))
    });

    // it('should select works on click in TimeSelect component', () => {
    //     mockedUseSelector.mockReturnValue(test)
    //
    //     render(<TimeSelect />)
    //     expect(screen.getByText(/5s/)).toBeInTheDocument()
    //     fireEvent.click(screen.getByText(/5s/))
    //     fireEvent.click(screen.getByText(/1s/))
    //     expect(screen.getByText(/1s/)).toBeInTheDocument()
    // });
})