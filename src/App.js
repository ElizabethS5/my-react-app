import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Page404 from "./components/page404/Page404";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Welcome {...props} name="Elizabeth" />}
        />
        <Route
          path="/welcome/:name"
          render={props => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
