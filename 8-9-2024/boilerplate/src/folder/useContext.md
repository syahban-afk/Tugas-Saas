import React, { useContext } from 'react';

// Membuat Context bernama ThemeContext
const ThemeContext = React.createContext('light');

function ThemedComponent() {
  // Menggunakan useContext untuk mengakses nilai ThemeContext
  const theme = useContext(ThemeContext);

  // Menentukan gaya berdasarkan tema yang didapat dari context
  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      Tema saat ini: {theme}
    </div>
  );
}

function App() {
  return (
    // Menyediakan nilai 'dark' untuk ThemeContext
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default App;