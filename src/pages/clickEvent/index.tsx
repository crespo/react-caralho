export default function Click() {
    function handleClick() {
        alert('U clicked me');
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}