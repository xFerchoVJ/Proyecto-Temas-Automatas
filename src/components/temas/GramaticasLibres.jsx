import { ButtonBack } from "../ButtonBack";
import { gramaticaLibre } from "../../data/data";

export const GramaticasLibres = () => {
  const { titulo, texto } = gramaticaLibre;
  return (
    <div className="container-md border rounded shadow mt-2 mb-2 p-3">
      <h1 className="text-center fw-bold pb-2">{titulo}</h1>
      <div className="row">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4YJ8H8LDAXM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="col-12 col-md-6 pb-4 pb-md-0"
        ></iframe>
        <p className="col-12 fst-normal fs-4 col-md-6">{texto}</p>
      </div>

      <div className="d-grid pt-3">
        <ButtonBack bottom={false} />
      </div>
    </div>
  );
};
