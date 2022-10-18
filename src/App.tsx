import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';
import Counter from './components/Counter';

const App = () => {
  return (
    <Wrapper>
      <Hello content="hello" isSpecial = {true} />
      <Hello />
      <Counter />
    </Wrapper>
  );
}

export default App;
