import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// smoke test
test('it renders without crashing', () => {
    render(<NewBoxForm />)
})

// snapshot test
test('it matches the snapshot', () => {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot()
})

it("should add new box", () => {
    const addBox = jest.fn();
    const { getByText, getByLabelText } = render(<NewBoxForm addBox={addBox} />);
    const backgroundColorInput = getByLabelText("Background color")
    const widthInput = getByLabelText("Box width")
    const heightInput = getByLabelText("Box height")
    
    fireEvent.change(backgroundColorInput, {target: { value: 'red'}});
    fireEvent.change(widthInput, { target: { value: '100px' } });
    fireEvent.change(heightInput, { target: { value: '100px' } });

    fireEvent.click(getByText('Add Box'));

    expect(addBox).toHaveBeenCalledWith({
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
    });
})