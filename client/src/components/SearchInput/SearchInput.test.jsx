import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Provider} from "react-redux";
import {store} from "../../redux/store";

import {SearchInput} from "./SearchInput";
const onChange = jest.fn();

describe('Search Component', () => {
    it('Search component renders', () => {
        render(<Provider store={store}><SearchInput /></Provider>)

        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

    // it('Search onChange works', () => {
    //     render(<Provider store={store}><SearchInput /></Provider>)
    //
    //     userEvent.type(screen.getByRole('textbox'), 'Test');
    //
    //     expect(onChange).toHaveBeenCalledTimes(4)
    // })

    // it('Search snapshot', () => {
    //     const testSearch = render(<Provider store={store}><SearchInput /></Provider>)
    //
    //     expect(testSearch).toMatchSnapshot();
    // })
})