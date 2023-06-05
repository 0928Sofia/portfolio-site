//import logo from './logo.svg';
import React from 'react';
import './App.css';
import './index.css';


import { Link } from "react-router-dom";

function App() {
  return (
    <div className="title1">
      <h1>Добро пожаловать!</h1>
      <p>
        Я хочу рассказать вам о моих любимых русских императорах.
      </p> 
      <p>
      Переходите по ссылкам и узнайте о ПетреI, ЕкатеринеII и ПетреIII. 
      </p>
      <br />
      <Link to="/about">ПётрI</Link>
      <br/>
      <Link to="/about3">ПётрIII</Link>
      <br/>
      <Link to="/about2">ЕкатеринаII</Link>
    </div>
  );
}

export default App;
