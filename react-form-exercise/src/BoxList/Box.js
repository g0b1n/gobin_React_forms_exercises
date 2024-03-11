import React from "react";

const Box = ({ id, backgroundColor, width, height }) => {
    const boxStyle = {
        backgroundColor,
        width,
        height
    };

    return <div style={boxStyle}></div>
};

export default Box;