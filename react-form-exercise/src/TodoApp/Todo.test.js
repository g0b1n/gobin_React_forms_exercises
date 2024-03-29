import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

// smoke test
test('it renders without crashing', () => {
    render(<Todo />)
})

// snapshot test
test('it matches the snapshot', () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot()
})