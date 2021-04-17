import React, { useState } from "react";
let id = 0;
const InputBar = ({ messages,  setMessages}) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.target.value);

    const handleClick =() => {
        setMessages([...messages, { id: id, content: value}]);
        setValue("");
        id += 1;
    };

    return (
        <div>
            <inputt value={value} onChange={handleChange} />
            <button onClick={handleClick}>Envoyer</button>
        </div>
    );
};

export default InputBar;