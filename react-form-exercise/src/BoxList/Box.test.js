import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

// smoke test
test('it renders without crashing', () => {
    render(<Box />)
})

// snapshot test
test('it matches the snapshot', () => {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot()
})