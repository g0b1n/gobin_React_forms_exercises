import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
test('it renders without crashing', () => {
    render(<BoxList />)
})

// snapshot test
test('it matches the snapshot', () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot()
})

