import { Route } from "react-router-dom";
import React from "react";
import Login from "./auth/login";
import CreateUser from "./auth/CreateUesr";
import PotList from "./pots/PotList";
import PotDetails from "./pots/PotDetails";


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
      <Route
      exact
        path="/pots"
        render={(props) => {
            return <PotList {...props} />;
        }}
      />
      <Route
        exact
        path="/pots/:potId(\d+)"
        render={(props) => {
          return (
            <PotDetails
              potId={parseInt(props.match.params.potId)}
              {...props}
            />
          );
        }}
      />
          </React.Fragment>
  );
};

export default ApplicationViews;