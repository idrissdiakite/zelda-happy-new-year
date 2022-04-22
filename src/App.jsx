import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
