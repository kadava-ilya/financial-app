import { render, screen } from '@testing-library/react';
import App from './App';


import {Provider} from "react-redux";
import {store} from "./redux/store";
import userEvent from "@testing-library/user-event";

describe('App component', () => {
  it('App renders', () => {
    render(<Provider store={store}><App /></Provider>);

  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('typing in Search works', () => {
    render(<Provider store={store}><App /></Provider>);

    expect(screen.queryByDisplayValue(/Test/)).toBeNull()

    userEvent.type(screen.getByRole('textbox'), 'Test')

    expect(screen.queryByDisplayValue(/Test/)).toBeInTheDocument()
  });
})

