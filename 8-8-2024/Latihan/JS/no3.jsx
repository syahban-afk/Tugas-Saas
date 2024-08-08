const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Hitungan: {count}</h1>
            <button onClick={increment}>Tambah</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
