/* eslint-disable */
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import { useSelector } from "react-redux";
import { Routes, Route, Link } from 'react-router-dom';
// import { addBookmark } from "./store.js"

function App (){
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={ <div>detail</div> } />
        <Route path="/about" element={ <div>about</div> } />
      </Routes>
    </>
  );
}

export default App