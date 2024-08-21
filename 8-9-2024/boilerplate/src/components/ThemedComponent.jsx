import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContexts';

function ThemedComponent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center',
        minHeight: '100vh',
    };

    return (
        <div style={style}>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemedComponent;
