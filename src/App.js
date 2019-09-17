import React, { Component } from 'react';
import './css/app.css';
import { Switch, Route, withRouter } from "react-router-dom";
import { Auth, Dashboard, TypingCombat, CodeWar } from "./components";


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/challenges/typingcombat" component={TypingCombat} />
          <Route exact path="/challenges/codewar" component={CodeWar} />
          <Route />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
