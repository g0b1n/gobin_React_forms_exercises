import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// smoke test
test('it renders without crashing', () => {
    render(<NewTodoForm />)
})

// snapshot test
test('it matches the snapshot', () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot()
})

it("should add new todo", () => {
    const addTodo = jest.fn();

    const { getByText, getByLabelText } = render(<NewTodoForm addTodo={addTodo} />);
    const todoInput = getByLabelText("Todo");

    fireEvent.change(todoInput, {target: {value: "Clean my room"}})

    fireEvent.click(getByText('Add New Todo'));

    expect(addTodo).toHaveBeenCalledWith({
        todo: 'Clean my room'
    });
})