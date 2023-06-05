import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App'; 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App() { 
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
   
    const handleSubmit = (event) => { 
      event.preventDefault(); 
    }; 
   
    return ( 
      <div className="title"> 
        <h1 className='title1'>Регистрация</h1> 
        <form onSubmit={handleSubmit}> 
          <label> 
            Имя: 
            <input 
              type="text" 
              value={name} 
              onChange={(event) => setName(event.target.value)} 
            /> 
          </label> 
          <br /> 
          <label> 
            Email: 
            <input 
              type="email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
            /> 
          </label> 
          <br /> 
          <label> 
            Пароль: 
            <input 
              type="password" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
            /> 
          </label> 
          <br /> 
          <button type="submit" className='title1'>Зарегистрироваться</button> 
        </form> 
      </div> 
    ); 
  }

  export const useCombined = (effect, initialState) => { 
    const [state, setState] = useState(initialState); 
   
    useEffect(() => { 
    effect(state); 
    }, [state, effect]); 
   
    return [state, setState]; 
  };

   const data = {}; 
 
fetch("/api/register", { 
  method: "POST", 
  headers: { 
    "Content-Type": "application/json" 
  }, 
  body: JSON.stringify(data) 
}) 
  .then(response => response.json()) 
  .then(data => console.log(data)) 
  .catch(error => console.error(error));




root.render(<App/>)
