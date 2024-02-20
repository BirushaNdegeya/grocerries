import React, { StrictMode } from "react";
import ReactDOMClient from 'react-dom/client';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
   return (
      <React.Fragment>
         <Header />
         <Content />
         <Footer />
      </React.Fragment>
   );
};

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <App />
   </StrictMode>
);