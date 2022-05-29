import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ButtonBack = ({bottom}) => {
  return (
    <div className={bottom ? "fixed-bottom" : ""}>
      <Link to="/" className="btn btn-primary btn-lg">
        Volver
      </Link>
    </div>
  );
};
