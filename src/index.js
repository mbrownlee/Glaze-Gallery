import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Pottery from "./Pottery";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Pottery />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
