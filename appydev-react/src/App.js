/* eslint-disable */
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import BookmarkPage from './routes/BookmarkPage.js';
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
        <Route path="/bookmark" element={ <BookmarkPage /> } />
      </Routes>

      <Footer />
    </>
  );
}

export default App