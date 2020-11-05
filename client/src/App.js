import React from 'react';
import './styles/main.scss'
import Logo from './components/Logo';
import WorkSpace from './components/WorkSpace'

function App() {
  return (
    <div className="app">
      <div className='container'>
        <Logo />
        <WorkSpace />
      </div>
    </div>
  );
}

export default App;