import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ButtonBack = () => {
  return (
    <Link to="/" className="btn btn-primary btn-lg">
      Volver
    </Link>
  );
};
