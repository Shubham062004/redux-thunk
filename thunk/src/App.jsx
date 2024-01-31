
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      console.log(res.data)
      setdata(res.data)
    })
  },[])
  const abc =()=>{
    setShow(!show)
  }
  return (
    <div className="App">
     
     {show && data.map((e)=>{
      return(
        <div className='name-mail'>
        <h2>{e.name}</h2>
        <h3>{e.email}</h3>
        <hr></hr>
        
      </div>
      
      )
     
      
     
     })}
      <button onClick={abc}>Show List</button>
    </div>
  );
}

export default App;