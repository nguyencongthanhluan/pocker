import React, { Component, lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Game = lazy(() => import("./pages/Game"));
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => {
              return (
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Home />
                </Suspense>
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <Suspense fallback={<h1>...Loading</h1>}>
                  <Game />
                </Suspense>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
