import { useContext } from 'react';
import CounterContext from '../contexts/CounterContext';

function Counter() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2>Counter: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default Counter;
