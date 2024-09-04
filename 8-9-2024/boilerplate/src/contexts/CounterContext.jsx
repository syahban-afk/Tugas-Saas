import { createContext, useReducer } from 'react';
// import Counter from './../components/Counter';
import PropTypes from 'prop-types';

const CounterContext = createContext();

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}

CounterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CounterContext;
