// data: 23.09.2021
// Sardor [ SarJS ]


import React from 'react';
import './App.css';
import Spiska from '../spiska/Spiska';

function App() {
  
  return (
    <>
  <div className="App">
 <h1 >React test App</h1>
 <h2>Arcana</h2>
 

  <div className="inputs">
    <br/>
    <input className='inputniki' type="text" placeholder="name"></input>   <br/> 
    <input className='inputniki' type="text" placeholder="Surname"></input><br/>
    <input className='inputniki' type="text" placeholder="INN"></input><br/>
    
 
    <button className='otpravit' type='submit'>Отправить</button>
    {/* <p className="example-shadow-2"><a href="#btn">flat</a></p> */}
  </div>
  <br/>
  <br/>
  


<Spiska/>
  </div>
  </>)
}
 
export default App;
