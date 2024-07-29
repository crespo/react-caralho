import { useState } from "react";

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    };


    return (
        <>
            <h1>Separate counters</h1>
            <MyButton/>
            <MyButton/>
            <h1>Bonded counters</h1>
            <MySecondButton count={count} onClick={handleClick} />
            <MySecondButton count={count} onClick={handleClick} />

        </>
    );
}

function MySecondButton({ count, onClick } : {count:any, onClick:any}) {
    return (
        <button onClick={onClick}>
            U clicked me {count} times c:
        </button>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}>
            U clicked me {count} times c:
        </button>
    );
}