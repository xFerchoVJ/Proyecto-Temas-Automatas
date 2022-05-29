import { Switch, Route } from "react-router-dom";
import { Gramaticas } from "../components/Gramaticas";
import { Main } from "../components/Main";
export const RoutApp = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/gramaticas">
        <Gramaticas />
      </Route>
    </Switch>
  );
};
