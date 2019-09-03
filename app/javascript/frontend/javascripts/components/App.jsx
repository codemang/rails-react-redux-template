import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../store/index";
import Counter from "./counter";

import '../../stylesheets/application'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (<Counter />)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App
