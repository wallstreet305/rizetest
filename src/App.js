import React from 'react';
import './App.css';
import Register from './component/account/register/register'
function App(props) {
  return (
    <div>
      <Register {...props}/>
    </div>
  );
}

export default App;
