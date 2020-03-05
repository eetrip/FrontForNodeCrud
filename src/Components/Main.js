import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Our all component files
import ListNote from "../Components/ListNote";
import AddNote from "../Components/AddNote";
import EditNote from "../Components/EditNote";
import ERROR from "../Components/Error";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ListNote} />
          <Route path="/notes/add" component={AddNote} />
          <Route path="/notes/:id" component={EditNote} />
          <Route path="/notes" component={ListNote} />
          <Route path="/*" component={ERROR} />
        </Switch>
      </main>
    );
  }
}

export default Main;
