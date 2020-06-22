import { Route } from "react-router-dom";
import React from "react";
import Login from "./auth/login";
import CreateUser from "./auth/CreateUesr";
import PotList from "./pots/PotList";
import PotDetails from "./pots/PotDetails";
import PotForm from "./pots/PotForm";
import MyPotList from "./potters/MyPots";


const ApplicationViews = (props) => {
    return (
        <React.Fragment>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Login {...props}/>;
            }}
          />
           <Route
           exact
        path="/potters"
        render={(props) => {
          return <Login {...props}/>;
        }}
      />
           <Route
        path="/create"
        render={(props) => {
          return <CreateUser {...props}/>;
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
        path="/pots/new"
        render={(props) => {
          return <PotForm {...props} />;
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
      <Route
        path="/pots/:potId(\d+)/edit"
        render={(props) => {
          return <PotForm {...props} />;
        }}
      />
      <Route
        path="/potters/:potterId"
        render={(props) => {
          return <MyPotList {...props} />;
        }}
      />
          </React.Fragment>
  );
};

export default ApplicationViews;