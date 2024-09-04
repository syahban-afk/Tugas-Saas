// import React from 'react';
import ThemeProvider  from './contexts/ThemeContexts';
import UserProvider from './contexts/UserContexts';
import CounterProvider  from './contexts/CounterContext';
import ThemedComponent from './components/ThemedComponent';
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CounterProvider>
          <ThemedComponent />
          <UserInfo />
          <Counter />
        </CounterProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
