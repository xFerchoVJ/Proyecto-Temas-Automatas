import { Switch, Route } from "react-router-dom";
import { Gramaticas } from "../components/temas/Gramaticas";
import { Main } from "../components/Main";
import { GramaticasLibres } from "../components/temas/GramaticasLibres";
import { ArbolDerivacion } from "../components/temas/ArbolDerivacion";
import { FormasChomsky } from "../components/temas/FormasChomsky";
import { DiagramaSintaxis } from "../components/temas/DiagramaSintaxis";
export const RoutApp = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/gramaticas">
        <Gramaticas />
      </Route>
      <Route path='/gramaticas-libres'>
        <GramaticasLibres/>
      </Route>
      <Route path='/arbol-derivacion'>
        <ArbolDerivacion/>
      </Route>
      <Route path='/formas-chomsky'>
        <FormasChomsky/>
      </Route>
      <Route path='/diagrama-sintaxis'>
        <DiagramaSintaxis/>
      </Route>
    </Switch>
  );
};
