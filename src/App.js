import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Counter from "./component/Counter";
import Admin from "./component/Admin";
import VR from "./component/ChangeVR";
import Surp from "./component/ChangeColumn";
import Tech from "./component/ChangeTech";
import LoginPage from "./component/Login";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Component, useState } from "react";

function App() {
  const isAuthUser = useSelector((state) => state.userData.isAuthUser);

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthUser === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <LoginPage passData={loginData} />
          </Route>
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/vr">
            <VR />
          </Route>
          <Route path="/surp">
            <Surp />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
