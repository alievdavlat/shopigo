import React from 'react'
import { useSelector } from 'react-redux';
import {ru, uz} from './utils/locales'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {  RouterProvider } from 'react-router-dom'
import  router  from './routes/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { lang } = useSelector(state => state.locale)
  
  const resources = {
   
    ru: {
      translation:ru 
    },
    uz: {
      translation:uz
    },
  }
  
  i18n.use(initReactI18next).init({
    resources,
    lng:lang, 
    fallbackLng: lang, 
    interpolation: {
      escapeValue: false, 
    },
  });


  return (
    <div className='app'>
      <div style={{zIndex:999999999999999999999}}>
      <ToastContainer 
      position="bottom-left"  
      />
      </div>
      <RouterProvider router={router}/>
  </div>
  )
}

export default App