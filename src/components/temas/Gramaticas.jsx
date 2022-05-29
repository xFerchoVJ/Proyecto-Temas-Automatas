import { gramatica } from '../../data/data';
import { ButtonBack } from '../ButtonBack';
import { GramaticaSubtemas } from './GramaticaSubtemas';

export const Gramaticas = () => {
  return (
    <div className="container-md border rounded shadow mt-2 mb-2">
      <h1 className="text-center fw-bold pt-5">Gramáticas</h1>
      <div className="row">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/csloaclALXw"
          title="Gramaticas explicacion"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="col-12"
        ></iframe>
        <h2 className="col-12 fst-italic">
          En el campo de la informática, el concepto de Gramática Formal
          adquirió gran importancia para el desarrollo de lenguajes de
          programación.
        </h2>
        <GramaticaSubtemas gramatica={gramatica}/>
      </div>
      <div className="d-grid pt-5">
        <ButtonBack bottom={true}/>
      </div>
    </div>
  );
};
