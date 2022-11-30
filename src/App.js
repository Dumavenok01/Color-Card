import React from 'react';
import CardList from "./modules/CardList/CardList";
import Header from './UI/Header/Header';
import "./style/App.css";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <CardList></CardList>
    </div>
  );
}

export default App;
