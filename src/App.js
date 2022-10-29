import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Post from './pages/Post.js';
import Layout from './layouts/Layout.js';
import {useEffect} from 'react';
import { useSelector} from "react-redux";

function App() {
const darkMode = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    if(darkMode === false){
      document.body.classList.add(
        'light',
      );
      document.body.classList.remove(
        'dark',
      );
    }else{
      document.body.classList.remove(
        'light',
      );
      document.body.classList.add(
        'dark',
      );
    }

},[]);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
