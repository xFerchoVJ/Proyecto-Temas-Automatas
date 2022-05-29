import { gramatica } from "../data/data";
import { ButtonBack } from "./ButtonBack";
console.log(gramatica)
export const Gramaticas = () => {
  return (
    <div className="container-md">
      <h1 className="text-center fw-bold pt-5">Gramáticas</h1>
      <div className="row">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/F8ZWzQjHU-c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="col-12"
        ></iframe>
        <h2 className="col-12">
          En el campo de la informática, el concepto de Gramática Formal
          adquirió gran importancia para el desarrollo de lenguajes de
          programación.
        </h2>
        <h3 className="col-12 fw-bold">{gramatica.simboloTitulo}: </h3>
        <p className="col-12 fs-3 ">{gramatica.simboloTexto}</p>
      </div>
      <div className="d-grid pt-5">
        <ButtonBack />
      </div>
    </div>
  );
};
