import React from 'react';
import { useEffect, useState} from "react";
import Toggle from 'react-toggle';
import Aside from '../components/Aside.js';
import Asidebottom from '../components/Asidebottom.js';
import Footer from '../components/Footer.js';
import './toggle.css';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/reducers/themeSlice";
import { Outlet, useLocation } from "react-router-dom";

const Layout =() =>{
const location = useLocation();
const darkMode = useSelector((state) => state.theme.darkMode);
const[togglestate, setTogglestate] = useState(false);
const dispatch = useDispatch();


useEffect(() => {
  if(darkMode === false){
    setTogglestate(false);
  }else{
    setTogglestate(true);
  }

},[]);
const changeTheme = () => {
  if(document.body.classList.contains('light'))
  {
    document.body.classList.remove(
      'light',
    );
    document.body.classList.add(
      'dark',
    );
    dispatch(toggleTheme());
  }else{
    document.body.classList.add(
      'light',
    );
    document.body.classList.remove(
      'dark',
    );
    dispatch(toggleTheme());
  }

}

if(location.pathname === '/')
  {
    console.log('Homepage');
    return(
      <div id="focus-wrapper" style={{outline:"none"}}>
        <div style={{color: 'var(--textNormal)', background: 'var(--bg)', transition: 'color 0.2s ease-out 0s, background 0.2s ease-out 0s', minHeight: '100vh'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto',maxWidth: '42rem', padding: '2.625rem 1.3125rem'}}>
            <header style={{display:'flex', justifyContent: 'spaceBetween', alignItems: 'center', marginBottom: '2.625rem'}}>
                <h1 style={{fontSize: '1.98818rem', lineHeight:'2.625rem', marginBottom: '0px', marginTop:'0px'}}>
                  <a aria-current="page" style={{boxShadow: 'none', textDecoration: 'none', color:'var(--textTitle)'}} href="/">Overreacted</a>
                </h1>
                <Toggle
                  defaultChecked={togglestate}
                  id='dark-light'
                  onChange={changeTheme}
                   />
            </header>
            <Aside />
            <main><Outlet /></main>
            <Footer />
          </div>
        </div>
      </div>
    )
 }else{
   console.log('Postpage');
   return(
     <div id="focus-wrapper" style={{outline:"none"}}>
       <div style={{color: 'var(--textNormal)', background: 'var(--bg)', transition: 'color 0.2s ease-out 0s, background 0.2s ease-out 0s', minHeight: '100vh'}}>
         <div style={{marginLeft: 'auto', marginRight: 'auto',maxWidth: '42rem', padding: '2.625rem 1.3125rem'}}>
           <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.625rem'}}>
              <h3 style={{fontFamily: 'Montserrat', marginTop: '0px', marginBottom: '0px', lineHeight: '2.625rem'}}>
                <a style={{boxShadow: 'none', textDecoration: 'none', color: 'rgb(255, 167, 196)'}} href="/">Overreacted</a>
              </h3>
               <Toggle
                 defaultChecked={togglestate}
                 id='dark-light'
                 onChange={changeTheme}
                  />
           </header>
           <main><Outlet /></main>
           <Asidebottom />
         </div>
       </div>
     </div>
   )
 }

}

export default Layout;
