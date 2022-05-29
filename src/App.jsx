import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { RoutApp } from "./router/RoutApp";
import "./styles/app.scss";
export const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <RoutApp />
      </Router>
    </div>
  );
};
