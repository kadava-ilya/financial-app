import {SearchInput} from "../SearchInput";
import {render, screen, fireEvent} from "@testing-library/react";
import * as reduxHooks from 'react-redux'
import * as actions from '../../redux/slices/searchSlice'
import userEvent from "@testing-library/user-event";

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

describe('SearchInput', () => {
    it('should create SearchInput', () => {
        mockedDispatch.mockReturnValue(jest.fn());

        const component = render(<SearchInput />)

        expect(component).toMatchSnapshot()
    })

    it('SearchInput renders', () => {
        mockedDispatch.mockReturnValue(jest.fn());

        render(<SearchInput />)

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    })

    it('should dispatch setInputValue on input value', () => {
        const mockedSetInputValue = jest.spyOn(actions, 'setInputValue')

        render(<SearchInput />)

        userEvent.type(screen.getByPlaceholderText(/Search/), 'Test')

        expect(mockedSetInputValue).toHaveBeenCalledTimes(4)
    })
})