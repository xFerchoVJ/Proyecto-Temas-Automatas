import { Link } from "react-router-dom";
import { Gramaticas } from "./Gramaticas";

export const Dropdown = () => {
  return (
    <div class="dropdown">
      <button
        class="button d-flex align-items-center justify-content-between shadow text-left w-100"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Buscar tema...
        <i className="fas fa-search me-2" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link to="/gramaticas" class="dropdown-item">
            Gramáticas
          </Link>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Gramáticas libres de contexto
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Árboles de derivación
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Formas normales de Chomsky
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Diagramas de sintaxis
          </a>
        </li>
      </ul>
    </div>
  );
};
