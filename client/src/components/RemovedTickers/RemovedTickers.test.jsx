import {render, screen} from "@testing-library/react";

import {RemovedTickers} from "./RemovedTickers";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

describe('RemovedTickers component', () => {
    it('RemovedTickers renders', () => {
        render(<Provider store={store}><RemovedTickers /></Provider>)

        expect(screen.getByText(/Removed tickers:/)).toBeInTheDocument();
    });

    it('RemovedTickers renders without data', () => {
        render(<Provider store={store}><RemovedTickers /></Provider>)

        expect(screen.queryByRole('button')).toBeNull();
    });

    // it('RemovedTickers snapshot', () => {
    //     const test = render(<RemovedTickers />)
    //
    //     expect(test).toMatchSnapshot()
    // })
})