import React, { useReducer } from 'react';

// Mendefinisikan fungsi reducer untuk mengelola state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  // Menggunakan useReducer untuk mendefinisikan state 'count' dan dispatch
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Hitungan: {state.count}</h1>
      {/* Dispatch action 'increment' untuk menambah count */}
      <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
      {/* Dispatch action 'decrement' untuk mengurangi count */}
      <button onClick={() => dispatch({ type: 'decrement' })}>Kurangi</button>
    </div>
  );
}

export default Counter;