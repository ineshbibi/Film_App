import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Home_Page/Home";
import DetailMovie from "./Components/DetailMovie/DetailMovie";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/Detail/:id"
          render={props => (
            <DetailMovie id={props.match.params.id}></DetailMovie>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
