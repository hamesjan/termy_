import React from "react";
import Home from "./components/home/home";
import { Route, Switch } from "react-router-dom";
import Challenge1 from "./components/challenge1/challenge1";
import Challenge2 from "./components/challenge2/challenge2";



function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />;
      <Route path="/challenge1" component={Challenge1}/>;
      <Route path="/challenge2" component={Challenge2}/>;

    </Switch>
  );
}

export default App;
