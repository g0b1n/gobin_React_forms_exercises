import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
test('it renders without crashing', () => {
    render(<TodoList />)
})

// snapshot test
test('it matches the snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot()
})