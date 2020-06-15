import { Route } from "react-router-dom";
import React from "react";
import Login from "./auth/login";
import CreateUser from "./auth/CreateUesr";


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
           <Route
        path="/potters"
        render={(props) => {
          return <Login />;
        }}
      />
           <Route
        path="/create"
        render={(props) => {
          return <CreateUser />;
        }}
      />
          </React.Fragment>
  );
};

export default ApplicationViews;