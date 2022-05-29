import { Link } from "react-router-dom";

export const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="button d-flex align-items-center justify-content-between shadow text-left w-100"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Seleccionar tema...
        <i className="fas fa-search me-2" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <Link to="/gramaticas" className="dropdown-item">
            Gramáticas
          </Link>
        </li>
        <li>
          <Link to="/gramaticas-libres" className="dropdown-item">
            Gramáticas Libres de Contexto
          </Link>
        </li>
        <li>
          <Link to="/arbol-derivacion" className="dropdown-item">
            Árboles de Derivación
          </Link>
        </li>
        <li>
          <Link to="/formas-chomsky" className="dropdown-item">
            Formas Normales de Chomsky
          </Link>
        </li>
        <li>
          <Link to="/diagrama-sintaxis" className="dropdown-item">
            Diagramas de Sintaxis
          </Link>
        </li>
      </ul>
    </div>
  );
};
