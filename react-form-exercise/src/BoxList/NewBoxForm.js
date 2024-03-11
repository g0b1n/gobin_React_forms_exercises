import React, {useState} from "react";

const NewBoxForm = ({addBox}) => {
    const InitialState = {
        backgroundColor: "",
        width: "",
        height: ""
    }

    const [formData, setFormData] = useState(InitialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData})
        setFormData(InitialState)
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background color</label>
            <input
                id="backgroundColor"
                type="text" name="backgroundColor"
                placeholder="Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <label htmlFor="width">Box width</label>
            <input
                id="width"
                type="text" name="width"
                placeholder="Box width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Box height</label>
            <input
                id="height"
                type="text" name="height"
                placeholder="Box height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add Box</button>

        </form>
    )
}

export default NewBoxForm;