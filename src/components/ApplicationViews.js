import { Route } from "react-router-dom";
import React from "react";
import Login from "./auth/login";


const ApplicationViews = (props) => {
    return (
        <React.Fragment>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Login />;
            }}
          />
          </React.Fragment>
  );
};

export default ApplicationViews;