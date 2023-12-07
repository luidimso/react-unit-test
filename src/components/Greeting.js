import { useState } from "react";

const Greeting = () => {
    const [text, setText] = useState(false);

    function changeTest() {
        setText(true);
    }

    return (
        <div>
            <h2>Hello</h2>
            <p>{text ? "Tested" : "Testing"}</p>
            <button onClick={changeTest}></button>
        </div>
    );
};

export default Greeting;