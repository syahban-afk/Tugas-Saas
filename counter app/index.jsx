function CounterApp() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-app">
            <h1>{count === 10 ? "Done" : `Nilai: ${count}`}</h1>
            <button onClick={decrement} disabled={count === 0 || count === 10}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment} disabled={count === 10}>+</button>
        </div>
    );
}

ReactDOM.render(<CounterApp />, document.getElementById('root'));