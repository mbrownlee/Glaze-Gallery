import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Pottery from "./Pottery";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";
import './index.css';


ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Route
        render={(props) => {
          return <Pottery {...props}/>;
        }}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
