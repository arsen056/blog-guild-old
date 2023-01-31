import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header/>
      <Layout/>
    </HashRouter>
  );
}

export default App;
