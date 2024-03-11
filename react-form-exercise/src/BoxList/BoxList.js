import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css';

const BoxList = () => {
    const initial_Box = [
        {id: uuid(), backgroundColor: 'blue', width: '100px', height: '100px'},
        {id: uuid(), backgroundColor: 'red', width: '100px', height: '100px'}
    ]

    const [boxes, setBoxes] = useState(initial_Box)

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
    }

    // Delete a box
    const deleteBox = (id) => {
       setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
           {boxes.map(box => (
            <div key={box.id}>
                <Box
                    id={box.id} 
                    backgroundColor={box.backgroundColor} 
                    width={box.width} 
                    height={box.height} 
                />
                <button onClick={ () => deleteBox(box.id)}>X</button>
            </div>
            ))}
        </div>
    )
}

export default BoxList;