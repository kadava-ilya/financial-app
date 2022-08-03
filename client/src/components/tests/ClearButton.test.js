import {ClearButton} from "../ClearButton";
import {fireEvent, render, screen} from "@testing-library/react";
import * as reduxHooks from "react-redux";

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe('ClearButton component', () => {
    it('should create a ClearButton component', () => {
        const component = render(<ClearButton />)

        expect(component).toMatchSnapshot()
    })

    it('should dispatch actions on ClearButton click', () => {
        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch);

        render(<ClearButton />)

        fireEvent.click(screen.getByRole('button'))

        expect(dispatch).toHaveBeenCalled()
    })
})
